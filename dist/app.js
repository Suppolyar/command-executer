"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const ffmpeg_executor_1 = require("./commands/ffmpeg/ffmpeg.executor");
const console_logger_1 = require("./out/console-logger/console-logger");
class App {
    run() {
        new ffmpeg_executor_1.FfmpegExecutor(console_logger_1.ConsoleLogger.getInstance()).execute();
    }
}
exports.App = App;
const app = new App();
app.run();
