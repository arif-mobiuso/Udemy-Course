import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const db = new pg.Client({
  host: "localhost",
  user: "postgres",
  database: "world",
  password: "pass",
  port: 5432
});
const app = express();
const port = 3000;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

db.connect();

async function checkVisited() {
  let countries = [];
  const result = await db.query("SELECT country_code FROM visited_countries");
  result.rows.forEach(country => countries.push(country.country_code));
  return countries;
}

app.get("/", async (req, res) => {
  const countries = await checkVisited();
  res.render("index.ejs", {
    countries: countries, total: countries.length
  });
});





app.post("/add", async (req, res) => {
  // const country = req.body.country ; 

  // try{
  //   const result  = await  db.query("select country_code from countries where LOWER(country_name) like '%' || $1 || '%' " , [country.toLowerCase()]) ;
  //   const country_code = result.rows[0].country_code;

  //   try{

  //     await db.query("Insert into visited_countries (country_code) values($1)" , [country_code]);
  //     res.redirect("/");
  //   }
  //   catch(err){
  //     console.log(err);
  //     const countries = await checkVisited();
  //     res.render("index.ejs", {
  //       countries: countries,
  //       total: countries.length,
  //       error: "Country already visited cannot add again !",
  //     });
  //   }

  // }catch(err){
  //   console.log(err);
  //   const countries = await checkVisited();
  //   res.render("index.ejs", {
  //     countries: countries,
  //     total: countries.length,
  //     error: "Country name does not exist, try again.",
  //   });
  // }
  try {

    const countryName = req.body.country;
    const result = await db.query("SELECT * FROM countries where LOWER(country_name) like '%' || $1 || '%' ", [countryName.toLowerCase()]);
    const country_code = result.rows[0].country_code;

    try {
      await db.query("INSERT INTO visited_countries (country_code) values($1)" , [country_code]);
          res.redirect("/");
    }
    catch (err) {
      console.log(err);
      const countries = await checkVisited();
      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Country already visited cannot add again !",
      });
    }


  } catch (err) {
    console.log(err);
    const countries = await checkVisited();
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country name does not exist, try again.",
    });
  }
});



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
