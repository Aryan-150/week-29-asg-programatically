import { AutoScalingClient, SetDesiredCapacityCommand } from "@aws-sdk/client-auto-scaling";
import { AWS_ACCESS_KEY, AWS_SECRET_ACCESS_KEY } from "./config";

const client = new AutoScalingClient({ region: "ap-south-1", credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string
} });

const command = new SetDesiredCapacityCommand({
    AutoScalingGroupName: "week-20-basic-vm-asg",
    DesiredCapacity: 3
});

(async () => {
    try {
        const data = await client.send(command);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
})();