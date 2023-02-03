const sharp = require("sharp");
// const Benchmark = require("benchmark");
// const minio = require("minio");
// const config = require(".config.js");

// const file = process.argv[2];
sharp.cache(false);
// const jpegSuite = new Benchmark.Suite("jpeg");
// jpegSuite
//   .add("jpeg-buffer", {
//     defer: true,
//     fn: async function (deferred) {
//       await sharp(file)
//         .jpeg({
//           quality: 10,
//         })
//         .toBuffer();
//       deferred.resolve();
//     },
//   })

//   .on("cycle", function (event) {
//     console.log(1000 / event.target.hz);
//     console.log(String(event.target));
//   })
//   .on("complete", function () {
//     // console.log(this.filter("fastest").map("name"));
//   })
//   // run async
//   .run({ async: false });
(async () => {
  console.time("处理时间");
  for (const i of new Array(100)) {
    await sharp("DJI.jpeg")
      .jpeg({
        quality: 10,
      })
      .toBuffer();
  }
  console.timeEnd("处理时间");
})();
