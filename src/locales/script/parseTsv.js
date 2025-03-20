"use strict";

const fs = require("fs");

const rawdata = fs.readFileSync("./translation.tsv");
let content = rawdata.toString();
let lines = content.split("\r\n");
let columns = lines[1].split("\t");
lines = lines.splice(3);

for (let i = 1; i < columns.length; i++) {
  const lang = columns[i];
  const data = {};

  lines.forEach((line) => {
    const lineArr = line.split("\t");
    const [namespace, ids] = lineArr[0].split(":");

    const idsArr = ids.split(".");

    if (!(namespace in data)) data[namespace] = {};

    if (idsArr.length > 1) {
      if (!(idsArr[0] in data[namespace])) data[namespace][idsArr[0]] = {};
      data[namespace][idsArr[0]][idsArr[1]] = lineArr[i];
    } else {
      data[namespace][idsArr[0]] = lineArr[i];
    }
  });

  for (let ns in data) {
    fs.writeFileSync(
      `../langs/${lang}/${ns}.json`,
      JSON.stringify(data[ns], null, 2)
    );
  }
}
