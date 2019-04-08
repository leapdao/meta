import {
    APIGatewayProxyCallback,
    APIGatewayProxyEvent,
    Context
} from "aws-lambda";
import {Web3Service} from "./services/web3Service";

export default async function handler(event: APIGatewayProxyEvent, context: Context, callback: APIGatewayProxyCallback): Promise<void> {
    const service = new Web3Service('https://testnet-node.leapdao.org');
    const year = parseInt(event.queryStringParameters.year) || new Date().getFullYear();
    const month = parseInt(event.queryStringParameters.month) || new Date().getMonth();
    console.log({
        from:  new Date(year, month-1, 1),
        to: new Date(year, month, 1),
    });
    const stats = await service.getTransactionStatistic(
        new Date(year, month-1, 1),
        new Date(year, month-1, 31)
    );
    console.log({
        from:  new Date(year, month-1, 1),
        to: new Date(year, month-1, 31),
        stats
    });
    callback(
        null,
        {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(stats)
        }
    )
}
