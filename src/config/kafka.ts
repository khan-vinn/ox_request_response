import kafka from "kafka-node";
import config from "./index";
import logger from "./logger";

const KafkaClient = kafka.KafkaClient

let host = config.kafkaHost || "localhost";
let port = config.kafkaPort || "9092";
logger.info(`KAFKA_HOST: ${host} KAFKA_PORT: ${port}`);

const Producer = kafka.Producer;
// const clientConsume = new KafkaClient({ kafkaHost: `${host}:${port}` });
const client = new KafkaClient({
    kafkaHost: `${host}:${port}` , requestTimeout: 7*24*60*60*1000, connectTimeout : 30000000
});
// const offset = new kafka.Offset(client);
// client.connect()
client.on("error", function (err) {
    logger.error(`Can't connect to kafka client : ${host}:${port}`, err);
    process.abort();
});
client.on("ready", function () {
    logger.info(`kafka ready for: ${host}:${port}`);
});
const producer = new Producer(client);
const Consumer = kafka.Consumer;

export {client, producer, Consumer}