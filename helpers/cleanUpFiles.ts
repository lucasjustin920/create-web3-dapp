
import fs from "fs";
import path from "path";

export const cleanUpFiles = () => {
  console.log("deleting template files");
  fs.rmSync(path.join(process.cwd(), "templates"), {
    recursive: true,
    force: true,
  });
  fs.rmSync(path.join(process.cwd(), "helpers"), {
    recursive: true,
    force: true,
  });
  fs.rmSync(path.join(process.cwd(), "types"), {
    recursive: true,
    force: true,
  });
  fs.rmSync(path.join(process.cwd(), ".eslintignore"), {
    force: true,
  });
  fs.rmSync(path.join(process.cwd(), ".eslintrc"), {
    force: true,
  });
  fs.rmSync(path.join(process.cwd(), "contributing.md"), {
    force: true,
  });
  fs.rmSync(path.join(process.cwd(), "yarn.lock"), {
    recursive: true,
    force: true,
  });
};
