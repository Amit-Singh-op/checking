const { Server } = require("socket.io");
const io = new Server({
  /* options */
});

io.on("connection", (socket) => {
  console.log("A client has connected");

  socket.on("message", (data) => {
    console.log("Received a message from the client:", data);
  });

  socket.on("disconnect", () => {
    console.log("A client has disconnected");
  });
});

io.listen(3000);
