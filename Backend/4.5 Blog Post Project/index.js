import express from "express" ; 
import bodyParser from "body-parser";
const app = express();
const port = 3000 ;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


// home page

app.get("/" , (req, res)=>{
    res.render("home.ejs");
});

// all blogs list

app.get("/blogs" , (req, res)=>{
    res.render("blogList.ejs" , {
        blog : blogPosts
    });
});


// read blog 

app.get("/blogs/:id" , (req, res)=>{
    var id = parseInt(req.params.id);
    let blog = blogPosts.find((b) => b.postId === id)
    res.render("blog.ejs" , {
        blog : blog
    });
})


//  getting to create new blog form 

app.get("/create" , (req, res)=>{

    res.render("create.ejs");

})

//  get the edit form 

app.get("/edit/:id" , (req, res)=>{
    var id = parseInt(req.params.id);

    let blog = blogPosts.find((b) => b.postId === id)

    res.render("edit.ejs" , {
        blog : blog
    });

})


// create new blog 

app.post("/blogs" , (req, res)=>{
    const blog = {
        postId : blogPosts.length+1 , 
        title : req.body.title, 
        category : req.body.category ,
        content  : req.body.content , 
        description : req.body.desc , 
        authorName : req.body.name
    }

    blogPosts.push(blog);

    res.redirect("/blogs");
});


// change blog 

app.post('/edit/:id', (req, res) => {
    const id = parseInt(req.params.id)
    
    blogPosts = blogPosts.map(blog => {
        if (blog.postId === id) {

            return {
                postId : id , 
                title: req.body.title  ,
                category: req.body.category,
                authorName: req.body.name,
                content: req.body.content,
                description : req.body.desc
            }
        }
        return blog ;
    })
    res.redirect(`/blogs/${id}`)

})

// delete a blog 
app.get("/delete/:id" , (req, res)=>{
    const id = parseInt(req.params.id) ;
    
    blogPosts = blogPosts.filter(blog => blog.postId !== id);
    res.redirect("/blogs")

})


app.listen(port, ()=>{
    console.log(`server listening on http://localhost:${port}`);
});


var blogPosts = [
    {
        postId : 1 , 
        title : "janeman" , 
        category : "movies" ,
        content  : "kuch to bhi likha hai kya hai ye pata nahi" , 
        description : "kuch bhi !" , 
        authorName : "kya pata"
    } , 
    {
        postId : 2 , 
        title : "janeman" , 
        category : "movies" ,
        content  : "kuch to bhi likha hai kya hai ye pata nahi" , 
        description : "kuch bhi !" , 
        authorName : "kya pata"
    } , 
    {
        postId : 3 , 
        title : "janeman" , 
        category : "movies" ,
        content  : "kuch to bhi likha hai kya hai ye pata nahi" , 
        description : "kuch bhi !" , 
        authorName : "kya pata"
    } , 
    {
        postId : 4 , 
        title : "janeman" , 
        category : "movies" ,
        content  : "kuch to bhi likha hai kya hai ye pata nahi" , 
        description : "kuch bhi !" , 
        authorName : "kya pata"
    } , 
    {
        postId : 5 , 
        title : "janeman" , 
        category : "movies" ,
        content  : "kuch to bhi likha hai kya hai ye pata nahi" , 
        description : "kuch bhi !" , 
        authorName : "kya pata"
    } , 
    {
        postId : 6 , 
        title : "janeman" , 
        category : "movies" ,
        content  : "kuch to bhi likha hai kya hai ye pata nahi" , 
        description : "kuch bhi !" , 
        authorName : "kya pata"
    } , 
    {
        postId : 7 , 
        title : "janeman" , 
        category : "movies" ,
        content  : "kuch to bhi likha hai kya hai ye pata nahi" , 
        description : "kuch bhi !" , 
        authorName : "kya pata"
    } , 
    {
        postId : 8 , 
        title : "janeman" , 
        category : "movies" ,
        content  : "kuch to bhi likha hai kya hai ye pata nahi" , 
        description : "kuch bhi !" , 
        authorName : "kya pata"
    } , 
    {
        postId : 9 , 
        title : "janeman" , 
        category : "movies" ,
        content  : "kuch to bhi likha hai kya hai ye pata nahi" , 
        description : "kuch bhi !" , 
        authorName : "kya pata"
    } , 
    {
        postId : 10 , 
        title : "janeman" , 
        category : "movies" ,
        content  : "kuch to bhi likha hai kya hai ye pata nahi" , 
        description : "kuch bhi !" , 
        authorName : "kya pata"
    } , 
    

]


