const config = {
    environment: getConf("NODE_ENV", "dev"),

    kafkaHost: getConf("KAFKA_HOST", "10.101.243.0"),
    kafkaPort: getConf("KAFKA_PORT", "9092"),

    mongoHost: getConf("MONGO_HOST", "localhost"),
    mongoPort: getConf("MONGO_PORT", "27017"),
    mongoUser: getConf("MONGO_USER", "catalog"),
    mongoPassword: getConf("MONGO_PASSWORD", "123"),
    mongoDatabase: getConf("MONGO_DATABASE", "assessment"),

    minioEndpoint: getConf('MINIO_ENDPOINT', 'cdn.oxbox.uz'),
    minioPort: getConf('MINIO_PORT', "9001"),
	minioAccessKeyID: getConf('MINIO_ACCESS_KEY_ID', '8KDqcmkSuag76ax5huxkPEghfRJGmj4xc6p4rjm8x279tU7qWzNEVd3Kwp4gBScw'),
    minioSecretAccesKey: getConf('MINIO_SECRET_KEY_ID', 'QK9fjd2gYTxuxXe8sNDy4VYga2sSmkg9hugbhMcktyGJpVHYYjmuu44X3ywCWve7'),

    questionaryService: getConf("QUESTIONARY_SERVICE_URL", "http://questionary-service:80"),
    spssService: getConf("SPSS_SERVICE_URL", "http://localhost:8000"),

    userServiceHost: getConf("USER_SERVICE_HOST", 'localhost'),
    userServicePort: getConf("USER_SERVICE_PORT", "8002"),

    questionaryServiceGrpcHost: getConf("QUESTONARY_SERVICE_GRPC_HOST", '0.0.0.0'),
    questionaryServiceGrpcPort: getConf("QUESTONARY_SERVICE_GRPC_PORT", "8004"),

    timeZone: getConf("TIME_ZONE", "Z-Zulu"),
    grpsPort: getConf("GRPC_SERVER_PORT", "50051")
    // languages: getConf("CONTENT_LANGUAGES", ["uz", "ru", "kz", "tj", "en"]),
    // channel: getConf("QUESTIONARY_CHANNEL", "oxbox")
    //
};

function getConf(name: string, def: string): string | string[] | undefined {
    if (process.env[name]) {
        return process.env[name];
    }
    return def;
}
export default config;
