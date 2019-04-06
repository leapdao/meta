import {
    APIGatewayProxyCallback,
    APIGatewayProxyEvent,
    Context
} from "aws-lambda";

export default function handler(event: APIGatewayProxyEvent, context: Context, callback: APIGatewayProxyCallback): void {
    console.log('Test invoke');
    return null;
}
