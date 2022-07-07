import mongoose from 'mongoose'
import config from "./index"
import logger from './logger'

const db = mongoose.connection
db.on('error', () => {
  logger.error('mongo db error in connection')
})
db.once('open', () => {
  logger.info('mongo db connection established')
})

// mongoDBUrl = "mongodb://" + config.mongoUser + ":" + config.mongoPassword + "@" + config.mongoHost + ":" + config.mongoPort + "/" + config.mongoDatabase;
export default class Database {
  user = process.env.MONGO_USER ||'localhost';
  psw =process.env.MONGO_PASSWORD ||'123'
  host = process.env.MONGO_HOST  || 'localhost'
  port = process.env.MONGO_PORT || "27017"
  db = process.env.MONGO_DATABASE || 'assessment'
  url: string = `mongodb://${this.user}:${this.psw}@${this.host}:${this.port}/${this.db}`
  constructor() {
    // eslint-disable-next-line max-len

    if (process.env.MONGO_AUTH_DISABLE) {
      this.url = process.env.MONGO_URL || "";
      // this.url = `mongodb://localhost:27017/${process.env.MONGODB_SERVER}`
    }
    logger.info('DATABASE URL: ' +this.url)
  }

 async connect() {
    return await mongoose.connect(
      // this.url,
      "mongodb://question_response:NC9Zr3jC8U@89.236.209.216:27017/question_response",
     // "mongodb://question_response:NC9Zr3jC8U@89.236.209.216:37017/question_response",
      {
        autoIndex: false,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
      },
      (error) => {
        if (error) {
          logger.error('MongoDB Connection error:', error)
          process.exit(1)
        }
      }
    )
  }
}
