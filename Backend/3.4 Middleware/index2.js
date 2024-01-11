import express from "express";
import morgan from "morgan";
const app = express();
const port = 3000;

// app.use(morgan("combined")) ; 

const  md = (req , res , next) =>{
  if(8 > 0){
    console.log(req.method);
    next();
  }
  else{
    console.log("error");
  }
};
 

app.get("/", md ,(req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
