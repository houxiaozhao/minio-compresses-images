const Queue = require("bull");
const sharp = require("sharp");
const minio = require("minio");
const path = require("path");
const config = require("../config.js");
const imageMinQueue = new Queue("imageMin", { redis: config.redis });
sharp.cache(false);
imageMinQueue.process(config.bull_concurrency, async (job) => {
  const { bucket, key } = job.data;
  const minioClient = new minio.Client(config.minio);
  console.time(job.id + "流处理时间");
  const readable = await minioClient.getObject(bucket, key);
  const pipeline = sharp({ unlimited: true, sequentialRead: true }).jpeg({ quality: config.quality });
  readable.pipe(pipeline);
  await minioClient.putObject(bucket, config.cover ? key : path.basename(key, path.extname(key)) + "_mini" + path.extname(key), pipeline, { "Content-Type": "image/jpeg", mini: "true" });
  console.timeEnd(job.id + "流处理时间");
  return;
});

imageMinQueue.on("completed", () => {
  console.log("任务完成");
  console.log("-----------------");
});
imageMinQueue.on("failed", (job, err) => {
  console.log("任务失败", job.id, err);
  console.log("-----------------");
});
module.exports = {
  imageMinQueue,
};
