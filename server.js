var createServer = require("http-server").createServer;
var server = createServer({ root: path.join(__dirname, "path/to/your/project/root") });
server.listen(3000);
