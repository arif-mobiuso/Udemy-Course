import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "joke";
const yourPassword = "joke";
const yourAPIKey = "6e21f2b1-2b85-48a0-90e4-5cc6fa43f2e0";
const yourBearerToken = "4a465a4b-7150-432b-b3c0-6880b006c80d";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async(req, res) => {
    try{
        const result = await axios.get(API_URL+"/random");
        res.render("index.ejs" , {
          content : JSON.stringify(result.data)
        })
    }catch(err){
      res.status(404).send(err.message);
    }
});

app.get("/basicAuth", async(req, res) => {
  try{
      const result = await axios.get(API_URL+"//all?page=2" , {
        auth :{
          username : yourUsername , 
          password : yourPassword
        }
      });
      res.render("index.ejs" , {
        content : JSON.stringify(result.data)
      });
  }catch(err){
    res.status(404).send(err.message);
  }
});




app.get("/apiKey",async  (req, res) => {
  try{
    const result = await axios.get(API_URL+"/filter" , {
      params : {
        score : 5 , 
        apiKey : yourAPIKey 
      }
    });
    res.render("index.ejs" , {content : JSON.stringify(result.data)});
  }
  catch(err){
    res.status(404).send(err.message);
  }
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

const config = {
  headers : { Authorization : `bearer ${yourBearerToken}`}
}

app.get("/bearerToken",async (req, res) => {
  try{
    const result = await axios.get(API_URL+"/secrets/2" , config);
    res.render("index.ejs" , {content : JSON.stringify(result.data)});
  }
  catch(err){
    res.status(404).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
