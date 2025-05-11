import { AutoScalingClient, SetDesiredCapacityCommand } from "@aws-sdk/client-auto-scaling";
import { AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY } from "./config";

const client = new AutoScalingClient({ region: "ap-south-1", credentials: {
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_ACCESS_KEY
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