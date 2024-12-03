import { Server } from "socket.io";

export function setupSocket(io: Server) {
  io.on("connection", (socket) => {
    console.log("The socket connected...", socket.id);

    socket.on("disconnect", () => {
      console.log("The socket disconnected...", socket.id);
    });
  });
}
