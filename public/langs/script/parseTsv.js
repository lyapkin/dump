"use strict";

const fs = require("fs");

const rawdata = fs.readFileSync("../translation.tsv");
let content = rawdata.toString();
let lines = content.split("\r\n");
let columns = lines[1].split("\t");
lines = lines.splice(3);
let gte = 0
for (let i = 1; i < columns.length; i++) {
  const lang = columns[i];
  const data = {};

  lines.forEach(line => {
    const trs = line.split("\t");
    const val = trs[0].split(".");
    if (val.length >= 4) gte+=1
    if (val.length > 2) {
      if (!data[val[0]]) {
        data[val[0]] = {}
      }
      if (!data[val[0]][val[1]]) {
        data[val[0]][val[1]] = {}
      }
      data[val[0]][val[1]][val[2]] = trs[i]
    } else if (val.length > 1) {
      if (!data[val[0]]) {
        data[val[0]] = {};
      }
      data[val[0]][val[1]] = trs[i];
    } else {
      data[trs[0]] = trs[i];
    }
  });
  fs.writeFileSync(
    "../" + lang + ".json",
    JSON.stringify(data, null, 2)
  );
}
// fs.copyFile(
//   "../backend/public/assets/lang/en.json",
//   "./src/resources/lang/en.json",
//   err => {
//     if (err) throw err;
//   }
// );

console.log(gte)