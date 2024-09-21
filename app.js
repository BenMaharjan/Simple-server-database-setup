import express from "express"

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, function() {
  console.log(`server listening on ${PORT}`)
});

app.get("/", function(req,res){
  res.status(200).send("working")
});
