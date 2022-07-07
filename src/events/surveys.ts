import { Kafka } from "kafkajs"
import config from "../config/index";
import logger from "../config/logger";
import ResponseStorage from "../storage/mongo/UncompletedSurveys";
import { client, producer, Consumer } from "../config/kafka";
import { resolve } from "url";

let host = config.kafkaHost || "localhost";
let port = config.kafkaPort || "9092";
const kafka = new Kafka({
    clientId: "my-app-2",
    brokers: [`${host}:${port}`],
    retry: {
        initialRetryTime: 10000000,
        retries: 8
    }
})

const responseStorage = new ResponseStorage();

logger.info(`KAFKA_HOST: ${host} KAFKA_PORT: ${port}`);

const topicToProduce = "v1-question-response-service-answer-record-7";
export async function getUncompletedSurveys() {
    {
        try {

            const producer = kafka.producer();
            const consumer = kafka.consumer({groupId: "second-consumer"});

            await consumer.connect();
            await producer.connect();

            await consumer.subscribe({ topic: 'v1-question-response-service-answer-record-6' })
            console.log(47);
            let savedData: any = {};
            await consumer.describeGroup();
            await consumer.run({
                eachBatchAutoResolve: true,
                eachBatch: async ({
                    batch,
                    resolveOffset,
                    heartbeat,
                    commitOffsetsIfNecessary,
                    uncommittedOffsets,
                    isRunning,
                    isStale,
                }) => {
                    for (let message of batch.messages){
                        logger.info("i'm consuming")
                        console.log({
                            topic: batch.topic,
                            partition: batch.partition,
                            highWatermark: batch.highWatermark,
                            message: {
                                offset: message.offset,
                                value: message.value?.toString(),
                                headers: message.headers,
                            }
                        })
                        let data: any;
                        if (typeof message.value?.toString() === "string") {
                            data = JSON.parse(message.value?.toString());
                        }
                        console.log(data)
                        if (data.message === "GET_UNCOMPLETED_SURVEYS") {
                            const surveys = await responseStorage.get(data);
                            // logger.info("Surveys get from response storage", surveys);
                            // console.log("Surveys get from response storage", surveys);
                            // surveys.message = "success";
                            let responseData: any = {};
                            responseData.message = "SEND_UNCOMPLETED_SURVEYS";
                            responseData.data = surveys;

                            await producer.send({
                                topic: topicToProduce,
                                messages: [
                                    {
                                        key: "kafka",
                                        value: JSON.stringify(responseData),
                                        partition: 0
                                    }
                                ]
                            })
                            logger.info(`producer sended to ${topicToProduce}`)
                        }
                        resolveOffset(message.offset)
                    }
                }
            })
        } catch (e:any) {
            logger.error(e.message, {
                function: "create record answer"
            });
            throw e;
        }
    }
}
