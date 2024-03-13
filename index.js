const io = require("socket.io");

const server = io.listen(3000);

server.on("connection", (socket) => {
  console.log("A client has connected");

  socket.on("message", (data) => {
    console.log("Received a message from the client:", data);
  });

  socket.on("disconnect", () => {
    console.log("A client has disconnected");
  });
});
