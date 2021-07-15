import React from 'react'
import {BrowserRouter as Router , Route, Redirect, Switch , Link} from "react-router-dom"
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import TextField from '@material-ui/core/TextField';

export default function Search() {
    const [statue , setStatue]  =React.useState("");
    const [username , setUsername] = React.useState("");
    const [title , setTitle] = React.useState("");
    let link = `https://storiez-server.herokuapp.com/search/${username}/${title}`;


    return (
        <div className = "Feeds-component">
            <br/>
            <br/>
            <h1>Search Your Story</h1>
            <br/>
            <label htmlFor="username">Username Search : </label>
            <br/><br/>
            <TextField type="text" 
            onChange={(e) => setUsername(e.target.value)}
            placeholder = "Username" required />
            <br/><br/>
            <label htmlFor="title">Title : </label>
            <br/><br/>
            <input type="text" 
            onChange={(e) => setTitle(e.target.value)}
            placeholder = "Title" required />
            <br/><br/>
            <Link to = {link}>
            <Button variant="contained" color ="primary"
            >Submit</Button>
            </Link>
            <br/><br/><br/>
            <div className = "Statue">
                <p> {statue}</p>
            </div>
            <br/><br/>
        </div>
    )
}
