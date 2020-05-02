# rabbitmq-nodejs
Simple integration of rabbitmq with nodejs (spin up docker container for rabbitmq)


spin up docker container for rabbitmq

docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management

producer.js
1. establish connection
2. create channel
3. create queue
4. channel.sendToQueue

consumer.js

1.establish connection
2. create channel
3. assert if queue exists
4. consume messages published by producer.js
5. if input 7 is received then acknowledge it.
