import express from "express";

const app = express();


app.get('/', (req, res) => {


    const day = new Date().getDay();

    var dayType = "Weekday";
    var advise = "Its time to hard work."


    if (day === 0 || day === 6) {
        var dayType = "Weekend";
        var advise = "Its time to have some fun."
    }

    res.render("index.ejs" , {
        weekday : dayType , 
        advise : advise
    })


});
app.listen(3000, () => {
    console.log("listening on port 3000");
});