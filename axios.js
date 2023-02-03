var axios = require("axios");
var data = JSON.stringify({
  EventName: "s3:ObjectCreated:Put",
  Key: "zhizu/DJI_0074.JPG",
  Records: [
    {
      eventVersion: "2.0",
      eventSource: "minio:s3",
      awsRegion: "",
      eventTime: "2023-02-01T04:56:04.767Z",
      eventName: "s3:ObjectCreated:Put",
      userIdentity: {
        principalId: "dronefinch",
      },
      requestParameters: {
        principalId: "dronefinch",
        region: "",
        sourceIPAddress: "127.0.0.1",
      },
      responseElements: {
        "content-length": "0",
        "x-amz-request-id": "173F9A6976F21A7D",
        "x-minio-deployment-id": "a42a3638-e389-4c81-84ec-9dc67238d138",
        "x-minio-origin-endpoint": "http://localhost:9000",
      },
      s3: {
        s3SchemaVersion: "1.0",
        configurationId: "Config",
        bucket: {
          name: "zhizu",
          ownerIdentity: {
            principalId: "dronefinch",
          },
          arn: "arn:aws:s3:::zhizu",
        },
        object: {
          key: "DJI_20230201172426_0002_Z_63841e8b0a3ab4001845e0e5.jpeg",
          size: 8509058,
          eTag: "f19c8c1688317bf59af2ddcc8d20d1dc",
          contentType: "image/jpeg",
          userMetadata: {
            "content-type": "image/jpeg",
          },
          sequencer: "173F9A699AF92CEF",
        },
      },
      source: {
        host: "127.0.0.1",
        port: "",
        userAgent: "MinIO (linux; amd64) minio-go/v7.0.44 MinIO Console/(dev)",
      },
    },
  ],
});

var config = {
  method: "post",
  maxBodyLength: Infinity,
  url: "http://localhost:3000/",
  headers: {
    "Content-Type": "application/json",
  },
  data: data,
};

// 同时调用run 100次
for (let i = 0; i < 100; i++) {
  axios(config);
}
