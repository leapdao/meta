import {
    APIGatewayProxyCallback,
    APIGatewayProxyEvent,
    Context
} from "aws-lambda";
import {Web3Service} from "./services/web3Service";

export default async function handler(event: APIGatewayProxyEvent, context: Context, callback: APIGatewayProxyCallback): Promise<void> {
    const service = new Web3Service('https://testnet-node.leapdao.org');
    console.log(await service.getTransactionStatistic(new Date(2019, 3, 8, 8), new Date()));
    return null;
}
