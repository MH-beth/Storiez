import axios from 'axios';
import React from 'react'
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import { TextField } from '@material-ui/core';
import "./storySearch.css";

export default function AddStory() {
    const [statue , setStatue]  =React.useState("");
    const [username , setUsername] = React.useState("");
    const [email , setEmail] = React.useState("");
    const [feed , setFeed] = React.useState("");
    const [title , setTitle] = React.useState("");
    const [mcfly , setMcfly] = React.useState(title);
    const [url , setUrl] = React.useState("");


    function toSeoUrl(url) {
        return url.toString()               // Convert to string
            .normalize('NFD')               // Change diacritics
            .replace(/[\u0300-\u036f]/g,'') // Remove illegal characters
            .replace(/\s+/g,'-')            // Change whitespace to dashes
            .toLowerCase()                  // Change to lowercase
            .replace(/&/g,'-and-')          // Replace ampersand
            .replace(/[^a-z0-9\-]/g,'')     // Remove anything that is not a letter, number or dash
            .replace(/-+/g,'-')             // Remove duplicate dashes
            .replace(/^-*/,'')              // Remove starting dashes
            .replace(/-*$/,'');             // Remove trailing dashes
    }

    

    const addStory = () =>{
        axios.post("https://storiez-server.herokuapp.com/addStory", {
            username : username,
            email : email,
            title : title,
            link : url,
            story : feed,
        }).then(response => {
            if(response.data.err)
            {
                setStatue(response.data.err);
            }
            else
            {
                setStatue(response.data.message);
            }
        })
    }
    const submit =() => {
        console.log(url);
        addStory();
    }
    return (
        <div className = "Feeds-component">
        <br/>
        <br/>
        <h1>Write your own Story : </h1>
        <br/>
        <label htmlFor="username">Username : </label>
        <br/><br/>
        <TextField  id="standard-basic" label="Username" type="text" 
        onChange={(e) => setUsername(e.target.value.toLowerCase())}
        placeholder = "Username" required />
        <br/><br/>
        <label htmlFor="username">Email :  </label>
        <br/><br/>
        <TextField  id="standard-basic" label="Email" type="text" 
        onChange={(e) => setEmail(e.target.value)}
        placeholder = "Email" required />
        <br/><br/>
        <label htmlFor="username">Story Title :   </label>
        <br/><br/>
        <TextField  id="standard-basic" label="Title" type="text" 
        onChange={(e) =>{
            setTitle(e.target.value);
            setUrl(toSeoUrl(e.target.value))
        }}
        placeholder = "Title...." required />
        <br/><br/>
        <label htmlFor="feed">Story : </label>
        <br/><br/>
        <textarea required placeholder = "Story" onChange ={(e) => setFeed(e.target.value)}/>
        <br/><br/>
        <Button variant="contained" color ="primary"
        onClick = {submit}>Submit</Button>
        <br/><br/><br/>
        <div className = "Statue">
            <InfoIcon />
            <p> {statue}</p>
        </div>
        <br/><br/>
    </div>
    )
}
