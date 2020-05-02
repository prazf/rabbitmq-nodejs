const amqp = require("amqplib");

const msg = {number : process.argv[2]};

connect();

async function connect(){
    try{
        const connection = await amqp.connect("amqp://192.168.99.100:5672")
        const channel = await connection.createChannel();
        const result = channel.assertQueue("tasks")
        channel.sendToQueue("tasks",Buffer.from(JSON.stringify(msg)));
        console.log(`task sent successfully ${msg.number}`)

    }
    catch(ex){
        console.error(ex)
    }
}