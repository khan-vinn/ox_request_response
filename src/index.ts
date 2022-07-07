import * as grpc from "@grpc/grpc-js";
import logger from "./config/logger";
import "reflect-metadata";
import app from "./app";
import DB from "./config/db";
import config from "./config";
import { Surveys, SurveysService } from "./grpc/services/Surveys";
import { Expenditure, ExpenditureService } from "./grpc/services/Expenditure";
const cron = require('node-cron');
const GRPC_PORT = config.grpsPort || 50051;

// cron.schedule("*/5 * * * * *", function() {
//     console.log("running a task every 5 second");
// });

if (!process.env) {
    throw new Error(`.env file required pleas create`);
}
const PORT = process.env.HTTP_PORT || 3030;

(async function () {
    try {
        const db = new DB();
        await db.connect();

        let server = new grpc.Server({
            "grpc.max_receive_message_length": -1,
            "grpc.max_send_message_length": -1
        });

        server.addService(SurveysService, new Surveys());
        server.addService(ExpenditureService, new Expenditure());

        server.bindAsync(
            `0.0.0.0:${GRPC_PORT}`,
            grpc.ServerCredentials.createInsecure(),
            (err: Error | null, bindPort: number) => {
                if (err) {
                    throw err;
                }
                logger.info(`GRPC server running on 0.0.0.0:${bindPort}`);
                logger.info(`GRPC server running on 0.0.0.0:${GRPC_PORT}`)
                server.start();
            }
        );
        app.listen(PORT, () => {
            logger.info(`App is running on port ${PORT}.`);
        });

        // initSocket(server)
        logger.info("Database connection initialized.");
    } catch (e:any) {
        logger.error(`DB connection error: ${e}`);
        process.exit(1);
    }
})();
