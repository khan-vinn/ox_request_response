import { client, producer, Consumer } from "../config/kafka";
import logger from "../config/logger";

export function bonus() {
    try {
        console.log('testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt');
        const consumer1 = new Consumer(
            client,
            [
                {
                    topic: "v1.questionary_service.question.next",
                    // topic: "v1.question_response_service.answer.record",
                    partition: 0
                }
            ],
            {
                autoCommit: true
            }
        );
        let data: any;

        consumer1.on("error", function (err) {
            logger.error(`Error with kafka Consumer NUMBER 1: \n`, err);
            throw err;
        });
        consumer1.on("message", async function (message) {
            console.log('test1');
            
            if (typeof message.value === "string") {
                data = JSON.parse(message.value);
                if (data.data.finished === true) console.log("SUCCESFULLY FINISHED",data);
            }
        });
    } catch (e:any) {
        logger.error(e.message, {
            function: "create record answer"
        });
        throw e;
    }
}
