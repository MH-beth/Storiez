const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());
app.use(cors());

const db = mysql.createConnection(
    {
        user : "sql11425217",
        host : "sql11.freesqldatabase.com",
        password : "sdnSPXErbF",
        database : "sql11425217"
    }
);

app.post("/login", (req , res) => {
    const username = req.params.username;
    const password = req.params.password;
    db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username , password], (err , results)=>{
        if(err)
        {
            res.send({statue : err});
        }
        if(results)
        {
            res.send({statue : "User Found", message : results});
        }else{
            res.send({statue : "An Error Have Occured"});
        }
    })
})

app.post("/register", (req , res) => {
    const username = req.params.username ;
    const password = req.params.password;
    const email = req.params.email;
    const found = false;
    const query1 = "SELECT * FROM users WHERE username = ? OR email = ?";
    const query2 = "INSERT INTO users(username , password , email) values (?,?,?)";
    db.query(query1, [username , email], (err , results) => {
        if(err)
        {
            res.send({statue  : err});
        }
        if(results)
        {
            found = true;
            res.send({statue : `${username} and/or ${email} is already used !`});
        }
        else{
            found = false;
        }
    });
    if(!found)
    {
        db.query(query2 , [username ,password , email], (err , results) => {
            if(err)
            {
                res.send({statue : err});
            }
            if(results)
            {
                res.send({statue : `${username} succesfully Registered`})
            }
            else{
                res.send({statue : "An Error Have Occured !"});
            }
        })
    }

})

app.post("/feed", (req , res) => {
    const username = req.body.username;
    const feed = req.body.feed;
    db.query("INSERT INTO usersfeed(username , feedback) VALUES (?,?)", [username , feed], (err , result) => {
        if(err)
        {
            res.send({err : err});
        }
        if(result)
        {
            res.send({statue : "Succesfully Submited"});
        }
        else
        {
            res.send({statue : "Something went wrong"});
        }
    })
})

app.post("/addStory", (req , res) => {
    const username = req.body.username ;
    const email = req.body.email;
    const title = req.body.title;
    const story = req.body.story;
    const link = req.body.link;

    db.query("INSERT INTO userstory(username , email, title , story , link) VALUES (?,?,?,?,?)", [username , email, title , story , link], (err , result) => {
        if(err)
        {
            res.send({err : err});
        }
        if(result)
        {
            res.send({message : "Story Sucessfully added"});
        }
        else
        {
            res.send({message : "Something Went Wrong Retry later"});
        }
    })
})

app.post("/user/:username" , (req , res) => {
    db.query("SELECT * FROM userstory WHERE username = ?", [req.params.username], (err , results) => {
        if(err)
        {
            res.send({statue : err});
        }
        if(!results[0])
        {
            res.send({statue : "Not Found"});
        }else{
            res.send({message : results});
        }
    })
})

app.post("/story/:username/:title" , (req, res) => {
    db.query("SELECT * FROM userstory WHERE username = ? AND link = ?" , [req.params.username , req.params.title] , (err, results) => {
        if(err)
        {
            res.send({statue : err});
        }
        if(!results[0])
        {
            res.send({statue : "Not Found"})
        }
        else
        {
            res.send(results);
        }
    })
})

app.post("/last-stories" , (req , res) =>{
    db.query("SELECT * FROM `userstory` ORDER BY id DESC LIMIT 5" , [],(err, results)=>{
        if(err)
        {
            res.send({statue : err});
        }
        if(results)
        {
            res.send({message : results});
        }else{
            res.send({statue : "An Error have occured"});
        }
    })
})

app.post("/vote", (req , res) => {
    const username = req.body.username;
    const title = req.body.title;
    const votes = req.body.votes;
    db.query("INSERT INTO userstory(votes) WHERE username = ? AND title = ? VALUES ?", [username , title , votes], (err , result) => {
        if(err)
        {
            res.send({statue : err});
        }
        if(result)
        {
            res.send({statue : "Succesfully Votes"});
        }else{
            res.send({statue : "An Error Have Occured"});
        }
    })
})

app.post("/all-stories", (req , res) =>{
    db.query("SELECT * FROM userstory", [],(err , result) => {
        if(err)
        {
            res.send({statue : err});
        }
        if(result)
        {
            res.send({message : result});
        }else{
            res.send({message : "Something went wrong retry later"});
        }
    })
})

app.post("/vote/:username/:title", (req , res) => {
    const username = req.params.username;
    const title = req.params.title;
    const votes = req.body.votes;
    db.query("INSERT INTO userstory(votes) WHERE username = ? AND title =? votes = ? ", [username , title  ,votes] , (err , results) => {
        if(err)
        {
            res.send({statue : err});
        }
        if(results)
        {
            res.send({statue :"Successfully Voted !"});
        }else{
            res.send({statue :"An Error Have Occured"});
        }
    })

})

app.listen(port, ()=> {console.log(`Running on Port ${port}`)});
