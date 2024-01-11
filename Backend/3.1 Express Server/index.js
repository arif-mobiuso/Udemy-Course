import express from "express";
const app = express();
const port = 3000;


app.get('/' , (req, res)=>{
    res.send("<h1>home end point</h1>")
});

app.get('/about' , (req, res)=>{
    res.send("<h1>about end point</h1>")
});

app.get('/contact' , (req, res)=>{
    res.send("<h1>contact end point</h1>")
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
