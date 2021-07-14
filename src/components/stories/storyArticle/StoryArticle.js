import React from 'react'
import {useEffect , useState} from "react";
import NotFound from "../../errors/404/NotFound"
import "./StoryArt.css";
import FavoriteIcon from '@material-ui/icons/Favorite';


const StoryArticle = ({storyData}) => {

    const[votes, setVotes] = useState(storyData.votes);

    if(storyData.title !== undefined)
    {
        return (
            <div className="stsory">
                <article>
                    <h1 className = "titles">{storyData.title}</h1>
                    <br/>
                    <p className = "story">{storyData.story}</p>
                    <br/>
                    <h4 className = "Author">Written by {storyData.username}</h4>
                    <p  className = "totalVotes"><FavoriteIcon /> {storyData.votes}</p>
                </article>
            </div>
        )
    }
    else
    {
        return(
            <div>
                <NotFound />
            </div>
        )
    }

}

export default StoryArticle
