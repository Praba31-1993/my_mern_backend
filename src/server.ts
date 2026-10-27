import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/router.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", router);


app.get("/", (_req, res) => {
    res.json({ message: "Node.js server is running!" });
});

const startServer = async () => {
    await connectDB();

    const PORT = process.env.MangoDB_PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();