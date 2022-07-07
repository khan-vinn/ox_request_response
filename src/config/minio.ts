import {Client} from "minio";
import cfg from "./index";

const minioClient = new Client({
    endPoint:
        typeof cfg.minioEndpoint === "string"
            ? cfg.minioEndpoint
            : process.env.MINIO_ENDPOINT || "",
    useSSL: true,
    accessKey:
        typeof cfg.minioAccessKeyID === "string"
            ? cfg.minioAccessKeyID
            : process.env.MINIO_ACCESS_KEY_ID || "",
    secretKey:
        typeof cfg.minioSecretAccesKey === "string"
            ? cfg.minioSecretAccesKey
            : process.env.MINIO_SECRET_KEY_ID || ""
});

export default minioClient;
