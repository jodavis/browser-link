

declare function require(name: string);
var touch = require("touch");
var pathutil = require("path");
var fileExists = require("file-exists");

class BrowserLink {
    refresh(path: string) {
        if (!pathutil.isAbsolute(path)) {
            path = pathutil.resolve(process.cwd(), path);
        }

        while (path.length > 4) {
            var filePath = pathutil.join(path, ".blrefresh");
            console.log("Looking for " + filePath);
            if (fileExists(filePath)) {
                console.log("Touching " + filePath);

                touch(filePath);

                break;
            }

            path = pathutil.dirname(path);
        }
    }
}

export = new BrowserLink();


