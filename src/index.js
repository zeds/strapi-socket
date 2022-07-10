'use strict';

module.exports = {

  register(/*{ strapi }*/) {},

  bootstrap({ strapi }) {
    var io = require('socket.io')(strapi.server.httpServer, {
      cors: {
        //origin: "http://localhost:5000",
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
    });

    io.on('connection', function(socket) {
      console.log("Connection established!");

      let axios = require("axios");

      socket.on('chat', async (data) => {
        console.log("data=",data);

        //everyone
        io.emit('chat message', {
          username: data.username,
          message: data.msg
        })


        let strapiData = { // Generating the message data to be stored in Strapi
          data: {
            booking_id: 222,
            message: data.msg,
            staff: 2
          },
        };
        await axios
          .post("http://localhost:1337/api/rooms", strapiData)//Storing the messages in Strapi
          .then((e) => {
            console.log("success");
          })
          .catch((e) => console.log("error", e.message));



      });
    });
  }
}
