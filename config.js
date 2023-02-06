module.exports = {
  redis: {
    port: 6379,
    host: "localhost",
  },
  minio: {
    endPoint: "localhost",
    useSSL: false,
    port: 9000,
    secretKey: "dronefinch",
    accessKey: "dronefinch",
    bucket: "zhizu",
  },
  quality: 30, // 图片质量
  cover: false, // 是否覆盖原图,默认不覆盖在原图名字后面加上_mini
  bull_concurrency: 1, // bull任务并发数
};
