const fs = require("fs");
const path = require("path");

if (process.argv.length < 3) {
    console.error("No directory was specified...");
    process.exit(1);
}

const dir = process.argv[2];

if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory) {
    console.error("The given path is not a directory/doesn't exist.");
    process.exit(1);
}

fs.readdir(dir, function(err, files) {
    if (err) {
        throw err;
    }
    files.forEach(file => {
        fs.watchFile(path.resolve(dir, file), function(curr, prev) {
            fs.readFile(path.resolve(dir, file), function(err, data) {
                if (err) {
                    throw err;
                }
                console.log(file + " file modifed. Content: " + data);
            });
        })
    })
});