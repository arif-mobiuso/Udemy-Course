import express from "express";
import bodyParser from "body-parser";
import pg from "pg" ; 

const db = new pg.Client({
  host : "localhost" , 
  user : "postgres" , 
  database : "secrets" , 
  password : "pass" , 
  port : 5432
}) ; 
db.connect();
const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const username = req.body.username ;
  const password= req.body.password ;
  try{

    const checkUser = await db.query("SELECT * from users where email = $1" , [username]) ; 
    console.log(checkUser.rowCount);
    if(checkUser.rowCount != 0 ){
      res.send("User already exists try logging in !");
    }
    else{
      await db.query("INSERT INTO users (email , password) values ($1 , $2);" , [username , password]);
      res.render("secrets.ejs") ; 
    }
    
  }
  catch(err){
    console.log(err);
  }
});



app.post("/login", async (req, res) => {
  const username = req.body.username ;
  const password= req.body.password ;
  try{

    const result  = await db.query("SELECT password from users where email = $1 " , [username]) ; 
    if(result.rows ==  0 ){
      res.send("user does not exist") ; 
    }
    const passwordDB = result.rows[0].password;
    if(passwordDB == password){
      res.render("secrets.ejs") ; 
    }else{
      res.send("Wrong email or passeord") ;
    }
  }catch(err){
    console.log(err);
  }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
