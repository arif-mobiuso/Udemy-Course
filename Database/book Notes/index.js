import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

// database connection

const db = new pg.Client({
    host: "localhost",
    user: "postgres",
    database: "bookNotes",
    password: "pass",
    port: 5432
});

db.connect();

const app = express();
const port = 3000;


// middlewares 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


async function getbooks() {
    const result = await db.query("Select * from books");
    return result.rows;
};


app.get("/", async (req, res) => {
    // const result = await db.query("Select * from books order by id asc") ;
    // const books = result.rows ; 
    const books = await getbooks();
    res.render("index.ejs", {
        books: books
    });
});


app.get("/books", async (req, res) => {
    const sortParameter = req.query.sort;
    console.log(sortParameter);
    const books = await getbooks();
    let sortedBooks = [];
    if (sortParameter === 'title') {
        sortedBooks = books.sort(
            (b1, b2) => (b1[sortParameter] > b2[sortParameter]) ? 1 : (b1[sortParameter] < b2[sortParameter]) ? -1 : 0
        )
    } else {
        sortedBooks = books.sort(
            (b1, b2) => (b1[sortParameter] > b2[sortParameter]) ? -1 : (b1[sortParameter] < b2[sortParameter]) ? 1 : 0
        )
    }
    res.render("index.ejs" , {
        books : sortedBooks 
    })


});


app.get("/addBook", (req, res) => {
    res.render("newBook.ejs");
})
console.log();

app.post("/books", async (req, res) => {
    const data = req.body;
    console.log(data);
    const book = {
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        rating: req.body.rating,
        summary: req.body.summary,
        date: new Date().toISOString().slice(0, 10),
    }
    const img = `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`

    await db.query("INSERT INTO books (title , author , date , rating , summary , img , isbn) values ($1 ,$2 , $3 , $4 , $5 , $6 , $7)", [book.title, book.author, book.date, book.rating, book.summary, img, book.isbn]);

    res.redirect("/");
    console.log(book);
    console.log(img);
})

app.get("/notes/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const result = await db.query("SELECT * FROM notes where book_id = $1", [id]);
    console.log(typeof (result.rows));
    console.log(typeof (result));
    console.log(result.rows);
    res.render("notes.ejs", {
        notes: result.rows,
        bookId: id
    });
});



app.post("/books/:id/notes", async (req, res) => {
    const bookId = parseInt(req.params.id);
    console.log(bookId);
    console.log(req.body);
    console.log();
    if(req.body.note.trim() !== ""){
        await db.query("INSERT INTO notes (book_id , note) values ($1 , $2)", [bookId, req.body.note.trim()]);
    }
        res.redirect(`/notes/${bookId}`);
    
});







app.listen(port, () => {
    console.log("server listening at port " + port);
});