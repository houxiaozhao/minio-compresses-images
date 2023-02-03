module.exports = {
  redis: {
    port: 6379,
    host: "localhost",
  },
  minio: {
    endPoint: "localhost",
    // port: 9002,
    port: 9000,
    useSSL: false,
    secretKey: "dronefinch",
    accessKey: "dronefinch",
  },
  quality: 30, // 图片质量
  cover: false, // 是否覆盖原图,默认不覆盖在原图名字后面加上_mini
};
