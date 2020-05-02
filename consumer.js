const amqp = require("amqplib");

connect();

async function connect(){

    try{
        const connection = await amqp.connect("amqp://192.168.99.100:5672")
        const channel = await connection.createChannel();
        const result = channel.assertQueue("tasks")

        channel.consume("tasks", message =>{
            const input = JSON.parse(message.content.toString())
            console.log(`Recieved job with input ${input.number}`)
           
            if (input.number == 7 ) 
                channel.ack(message);
        })

        console.log("Waiting for messages...")
    }
    catch(ex){
        console.error(ex)
    }

}