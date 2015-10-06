var touch = require("touch");
var pathutil = require("path");
var fileExists = require("file-exists");
var BrowserLink = (function () {
    function BrowserLink() {
    }
    BrowserLink.prototype.refresh = function (path) {
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
    };
    return BrowserLink;
})();
module.exports = new BrowserLink();
//# sourceMappingURL=browser-link.js.map