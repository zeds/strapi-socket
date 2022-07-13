'use strict';

module.exports = {

  // This gives you an opportunity to extend code.
  register({ strapi }) {},

  bootstrap(/*{ strapi }*/) {
    let axios = require("axios");

    var io = require('socket.io')(strapi.server.httpServer, {
      cors: {
        //origin: "http://localhost:5000",
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
    });

    io.on('connection', function(socket) {  // Listening for a connection from the client
      socket.on("join", ({ username, name }) => { // Listening for a join connection
        console.log("user connected");
        console.log("username is", username);
        console.log("room name is", name);
        if (username) {
          //socket.join("group");
          socket.join(name);
          socket.emit("welcome", {
            user: "bot",
            text: `${username}, Welcome to the group chat`,
            userData: username,
          });

        } else {
          console.log("An error occured");
        }
      });
      socket.on("sendMessage", async (data) => {
        let strapiData = {
          data: {
            name: data.name, // room name
            username: data.username,  // user_id
            message: data.message,
            staff: data.staff
          }
        };
        console.log("strapiData=",strapiData);

        await axios
          .post("http://localhost:1337/api/rooms?populate=deep", strapiData)//Storing the messages in Strapi
          .then((response) => {
              //自分を含む全員にメッセージを送る
            console.log("response=",response.data.data.attributes.staff.data.attributes.avatar.data[0].attributes.formats.thumbnail.url);
            let avatar = response.data.data.attributes.staff.data.attributes.avatar.data[0].attributes.formats.thumbnail.url;
            io.to(data.name).emit("message",{
              username: data.username,
              message: data.message,
              avatar: avatar

            })
          })
          .catch((e) => console.log("error", e.message));
        });
    });
  }
};
