// const Koa = require("koa");
// const bodyParser = require("koa-bodyparser");
// const Router = require("koa-router");
// const { imageMinQueue } = require("./queue/imageMin.js");
// const app = new Koa();
// const router = new Router();
// router.post("/", async (ctx) => {
//   const body = ctx.request.body;
//   if (body && body.EventName === "s3:ObjectCreated:Put" && record.s3.object.contentType === "image/jpeg") {
//     if (record.s3.object.userMetadata["X-Amz-Meta-Mini"]) return;
//     imageMinQueue.add({ key: record.s3.object.key, bucket: record.s3.bucket.name });
//   }
//   ctx.body = "";
// });
// // Error: sending event failed with 404 Not Found (*errors.errorString)
// router.head("/", async (ctx) => {
//   ctx.body = "";
// });
// app.use(bodyParser());
// app.use(router.routes());
// app.listen(3000);
// console.log("Server running on port 3000", "http://localhost:3000");
const config = require("./config.js");
const { imageMinQueue } = require("./queue/imageMin.js");
const minio = require("minio");
const minioClient = new minio.Client(config.minio);
let poller = minioClient.listenBucketNotification(config.minio.bucket, "", "", ["s3:ObjectCreated:Put"]);
poller.on("notification", (record) => {
  if (record && record.eventName === "s3:ObjectCreated:Put" && record.s3.object.contentType === "image/jpeg") {
    if (record.s3.object.userMetadata["X-Amz-Meta-Mini"]) return;
    imageMinQueue.add({ key: record.s3.object.key, bucket: record.s3.bucket.name });
  }
});
