import { AutoScalingClient, SetDesiredCapacityCommand } from "@aws-sdk/client-auto-scaling";
import dotenv from "dotenv";
dotenv.config();

const client = new AutoScalingClient({ region: "ap-south-1", credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
} });

const command = new SetDesiredCapacityCommand({
    AutoScalingGroupName: "behjbh",
    DesiredCapacity: 2
});

try {
    const data = await client.send(command);
    console.log(data);

} catch (error) {
    console.error(error);
}

// timestamp: [ 1:33:00 ]