import fs from "fs";
import rimraf from "rimraf";

const baseFolder = `./assets`;

rimraf.sync(`${baseFolder}/*.txt`);

for (let number of Array(100)
  .fill(0)
  .map((_, i) => i + 1)) {
  fs.writeFileSync(
    `${baseFolder}/${number}.txt`,
    `List 1 - Calc 1 - Exercise ${number}`
  );
}
