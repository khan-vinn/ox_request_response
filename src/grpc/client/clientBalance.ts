import { CustomerServiceClient } from "../models/customer_service_grpc_pb";
import { credentials, ServiceError } from "@grpc/grpc-js";
import { AddBalanceRequest, AddBalanceResponse } from "../models/customer_service_pb";
import config from "../../config";
type Resolve<T> = (value: T) => void;
type Reject = (reason?: unknown) => void;

class Balanse {
    private readonly contactClient: CustomerServiceClient = new CustomerServiceClient(
        `${config.userServiceHost}:${config.userServicePort}`,
        credentials.createInsecure()
    );

    public async addBalance(param: AddBalanceRequest): Promise<AddBalanceResponse> {
        return new Promise((resolve: Resolve<AddBalanceResponse>, reject: Reject): void => {
            this.contactClient.addBalance(param, (err: ServiceError | null, res: AddBalanceResponse) => {
                if (err) {
                    console.log(err);
                    return reject(err);
                }
                resolve(res);
            });
        });
    }
}

export const balanceService: Balanse = new Balanse();
