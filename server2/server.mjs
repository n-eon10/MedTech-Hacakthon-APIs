import express from "express";
import cors from "cors";


const PORT = 4000;
const app = express();

app.use(express.json());
app.use(cors( {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
} ));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes


app.listen(PORT, () => {
  console.log(`Server 2 is listening on port ${PORT}`)
});