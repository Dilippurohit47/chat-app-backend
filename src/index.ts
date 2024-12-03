import express, { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import AuthRoutes from "./routes/index.js";
const app: Application = express();
import { Server } from "socket.io";
import { createServer } from "http";
import { setupSocket } from "./socket.js";
const PORT = process.env.PORT || 7000;
import { createAdapter } from "@socket.io/redis-streams-adapter";
import redis from "./config/redis.config.js";
const server = createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["hhtp://localhost:3000"],
  },
  // adapter: createAdapter(redis),
});

setupSocket(io);
export { io };

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

app.use("/api", AuthRoutes);

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
