// HINTS:
// 1. Import express and axios
import express from "express" ; 
import axios from "axios" ; 

import bodyParser from "body-parser";

const app = express() ; 
const port = 3232 ;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/' , async(req , res)=>{
res.render("index.ejs" , {
    content : "waiting for data .."
}) ; 
});

const API_URL = "https://v2.jokeapi.dev/joke" ; 

app.get('/jokes' , async(req , res)=>{
const result = await axios.get("https://v2.jokeapi.dev/joke/Any") ;     
console.log(result.data);
res.render("index.ejs" , {
    content : JSON.stringify(result.data) 
}) ;     
});



app.post('/getJoke' , async(req, res)=>{
    const details = req.body ; 

    console.log(details);


    let url ;
    //  by category 
    if(details.catselect === 'any'){
        url = "Any"
    }
    else if(details.catselect === 'multi'){
        if(typeof(details.category) === 'string'){
            url = details.category;
        }
        else{
            url = details.category[0];
            url += "," + details.category.slice(1,);
            console.log(url);
        }
    }

    // by language
    if(details.language){
        url += "?lang="+details.language ;
    }

    // blacklist flags

    if(details.flag){
        url += "&blacklistFlags=" ; 
        if(typeof(details.flag) === 'string'){
            url+= details.flag ;
        }
        else{
            url+=details.flag[0];
            url += "," + details.flag.slice(1, );
        }
    }
    // by format 
    if(details.format){
        url += `&format=${details.format}` ; 
    }

    // range 
    if(details.from > 0  && details.to > 0 ){
       url += `&idRange=${details.from}-${details.to}`; 
    }

    // amount of jokes
    
    if(details.amount){
        url += `&amount=${details.amount}` ; 
    }




    console.log(API_URL+"/"+url);




    const result =  await axios.get(API_URL+`/${url}` ) ;
    

    const finalResult  = {
        setup : result.data.setup ,
        delivery : result.data.delivery
    }

    console.log(finalResult);
    res.render("index.ejs" , {
        joke : finalResult 
    })

});




app.listen(port , ()=>{
console.log(`server listening on ${port}`);
});

