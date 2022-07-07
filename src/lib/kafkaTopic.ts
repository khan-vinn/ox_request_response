import logger from "../config/logger";
import {client} from "../config/kafka"

const topicsToCreate = [
    {
        topic: "v1-question-response-service-answer-record",
        partitions: 1,
        replicationFactor: 1
    },
    {
        topic: "v1-question-response-service-answer-recorded",
        partitions: 1,
        replicationFactor: 1
    },
    {
        topic: "v1-questionary-service-question-next",
        partitions: 1,
        replicationFactor: 1
    },
    {
        topic: "v1-question-response-service-answer-record-1",
        partitions: 1,
        replicationFactor: 1
    },
    {
        topic: "v1-question-response-service-answer-record-2",
        partitions: 1,
        replicationFactor: 1
    },
    {
        topic: "v1-question-response-service-answer-record-3",
        partitions: 1,
        replicationFactor: 1
    },
    {
        topic: "v1-question-response-service-answer-record-4",
        partitions: 1,
        replicationFactor: 1
    },
    {
        topic: "v1-question-response-service-answer-record-5",
        partitions: 1,
        replicationFactor: 1
    },
    {
        topic: "v1-question-response-service-answer-record-6",
        partitions: 1,
        replicationFactor: 1
    },
    {
        topic: "v1-question-response-service-answer-record-7",
        partitions: 1,
        replicationFactor: 1
    },
    {
        topic: "v1-question-response-service-answer-record-8",
        partitions: 1,
        replicationFactor: 1
    }
];

export default function createTopics(): any {
    client.createTopics(topicsToCreate, (err:any, result:any) => {
        if (err) {
            logger.error("err: ", err.message);
            return 0;
        }
        console.log("result in create topic: ", result);
        return 1;
    });
}
