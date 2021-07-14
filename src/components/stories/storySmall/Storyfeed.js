import React , {useEffect}from 'react';
import Button from '@material-ui/core/Button';
import "./Storyfeed.css";
import {Link} from "react-router-dom";
import NotFound from '../../errors/404/NotFound';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const Storyfeed = ({story}) => {
    const url = `/${story.username}/${story.link}`;
    console.log(url);
    return(
      <div className = "story-component">
        <h1>{story.title}</h1>
        <div className = "vote-div">
            <ThumbUpIcon className = "vote" />
            <p>Total Votes : {story.votes}</p>
        </div>
        <Link to ={url}>
        <Button className = "btn" href = {url} variant="contained" color="primary">See The Story</Button>
        </Link>
      </div>
    );
}

export default Storyfeed
