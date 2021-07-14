import React from 'react'
import Axios from "axios";
import "./FeedForm.css";
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import { TextField } from '@material-ui/core';

export default function FeedForm() {
    const [statue , setStatue]  =React.useState("");
    const [username , setUsername] = React.useState("");
    const [feed , setFeed] = React.useState("");

    const sendFeed = () => {
        Axios.post("http://localhost:8080/feed", 
        {
            username : username,
            feed : feed
        }).then(response => {
            if(response.data.err)
            {
                setStatue(`An error have occured : ${response.data.err}`);
            }
            else
            {
                setStatue(`${response.data.statue}`);
            }
        })
    }

    return (
        <div className = "Feed-component">
            <br/>
            <br/>
            <h1>Let us a feedback</h1>
            <br/>
            <div className = "field">
            <label htmlFor="username">Username : </label>
            <br/><br/>
            <TextField  id="standard-basic" label="Username" type="text" 
            onChange={(e) => setUsername(e.target.value)}
            placeholder = "Username" required />
            <br/><br/>
            <label htmlFor="feed">Feedback : </label>
            <br/><br/>
            <textarea required placeholder = "Feedback" onChange ={(e) => setFeed(e.target.value)}/>
            <br/><br/>
            <Button variant="contained" color ="primary"
            onClick = {sendFeed}>Submit</Button>
            <br/><br/><br/>
            <div className = "Statue">
                <InfoIcon />
                <p> {statue}</p>
            </div>
            </div>
            <br/><br/>
        </div>
    );
};
