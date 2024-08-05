const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");

const xmlDirectoryPath = path.join(
  __dirname,
  "./XML/A003_551_20240714071616.xml"
);
const jsonDirectoryPath = path.join(__dirname, "src/JSON");

// Create JSON directory if it doesn't exist
if (!fs.existsSync(jsonDirectoryPath)) {
  fs.mkdirSync(jsonDirectoryPath, { recursive: true });
}

fs.readdir(xmlDirectoryPath, (err, files) => {
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  files.forEach((file) => {
    const filePath = path.join(xmlDirectoryPath, file);
    const fileExtension = path.extname(file);

    if (fileExtension === ".xml") {
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          return console.log("Unable to read file: " + err);
        }

        xml2js.parseString(data, (err, result) => {
          if (err) {
            return console.log("Unable to parse XML: " + err);
          }

          const jsonFilePath = path.join(
            jsonDirectoryPath,
            file.replace(".xml", ".json")
          );
          fs.writeFile(jsonFilePath, JSON.stringify(result, null, 2), (err) => {
            if (err) {
              return console.log("Unable to write JSON file: " + err);
            }

            console.log(`Converted ${file} to JSON`);
          });
        });
      });
    }
  });
});
