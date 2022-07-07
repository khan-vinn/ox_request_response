import logger from "../config/logger";
import ResponseStorage from "../storage/mongo/Response";
import BonusStorage from "../storage/mongo/Bonus";
import { client, producer, Consumer } from "../config/kafka";
import { format } from "url";
const responseStorage = new ResponseStorage();
const bonusStorage = new BonusStorage();
export function create() {
    {
        try {
            const consumer = new Consumer(
                client,
                [
                    {
                        topic: "v1-question-response-service-answer-record",
                        partition: 0
                    }
                ],
                {
                    autoCommit: true
                }
            );
            let data: any;
            let savedData: any = {};
            consumer.on("error", function (err) {
                logger.error(`Error with kafka Consumer NUBMER 2: \n`, err);
                throw err;
            });
            producer.on("ready", function () {
                logger.info("producer ready");
            });
            producer.on("error", function (err) {
                logger.error(`Error with kafka Producer: \n`, err);
                throw err;
            });
            consumer.on("message", async function (message) {
                if (typeof message.value === "string") {
                    data = JSON.parse(message.value);
                }
                if (data.data && data.data.finished && data.data.finished === true) {
                    const createBonus = await bonusStorage.create(data);
                    if (createBonus.status === "finished") {
                        data.data.bonus_info = createBonus.data;
                        data.status="finished"
                        const topic = "v1-question-response-service-answer-recorded";
                        const payloads = [
                            {
                                topic,
                                messages: [JSON.stringify(data)],
                                partition: 0
                            }
                        ];
                        producer.send(payloads, function () {
                            logger.info(`data sent to ${topic}`, payloads);
                        });
                        logger.info("survey finished", createBonus);
                    } else logger.error("survey finished error", createBonus);
                } else {
                    savedData = await responseStorage.create(data);
                    let topic: any;
                    if (savedData.message === "NO_ACCESS") {
                        topic = "v1-questionary-service-question-next";
                    } else topic = "v1-question-response-service-answer-recorded";
                    const payloads = [
                        {
                            topic,
                            messages: [JSON.stringify(savedData)],
                            partition: 0
                        }
                    ];

                    producer.send(payloads, function () {
                        logger.info(`data sent to ${topic}`, payloads);
                    });
                }
            });
        } catch (e:any) {
            logger.error(e.message, {
                function: "create record answer"
            });
            throw e;
        }
    }
}
