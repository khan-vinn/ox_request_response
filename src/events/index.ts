import logger from "../config/logger";
import { create } from "./recordResponse";
import { getUncompletedSurveys } from "./surveys";
import createTopics from "../lib/kafkaTopic";

async function events() {
    try {
        await createTopics();
        await create();
        await getUncompletedSurveys();
        // await bonus();
    } catch (e:any) {
        logger.error(e);
        process.exit(1)
    }
}

export {events};