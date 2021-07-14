import React , {useEffect}from 'react';
import Button from '@material-ui/core/Button';
import "./Storyfeds.css";
import {Link} from "react-router-dom";
import NotFound from '../../../errors/404/NotFound';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const StoryFeds = ({story}) => {
    const url = `/${story.username}/${story.link}`;
    console.log(url);
    let urlUser = `/user/${story.username}`;
    return(
      <div className = "story-component">
        <h1 className = "user"><Link className = "link" to = {urlUser}>{story.username} </Link> : {story.title}</h1>
        <br/><br/>
        <br/><br/>
        <Link to ={url}>
        <Button className = "btn" href = {url} variant="contained" color="primary">See The Story</Button>
        </Link>
        <div className = "vote-div">
            <ThumbUpIcon className = "vote" />
            <p>Total Votes : {story.votes} votes</p>
        </div>
      </div>
    );
}

export default StoryFeds
