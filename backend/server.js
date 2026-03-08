const express = require("express");
const cors = require("cors");

const interviewRoutes = require("./routes/interviewRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("AI Mock Interview Backend Running");
});

app.use("/interview", interviewRoutes);

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});