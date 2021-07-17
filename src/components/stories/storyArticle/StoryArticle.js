import React from 'react'
import {useEffect , useState} from "react";
import NotFound from "../../errors/404/NotFound"
import "./StoryArt.css";
import FavoriteIcon from '@material-ui/icons/Favorite';
import axios from 'axios';


const StoryArticle = ({storyData}) => {

    const urls = `https://storiez-server.herokuapp.com/vote/${storyData.username}/${storyData.title}`;
    const[votes, setVotes] = useState(storyData.votes);
    const [statue , setStatue] = useState("");

    const Vote = () => {
        useEffect(() => {
            axios.post(urls , {votes : votes})
            .then(response => {
                setStatue(response.data.statue);
            })
    }, []);
    }

    if(storyData.title !== undefined)
    {
        if(votes !== undefined)
        {
        return (
            <div className="stsory">
                <article>
                    <h1 className = "titles">{storyData.title}</h1>
                    <br/>
                    <p className = "story">{storyData.story}</p>
                    <br/>
                    <h4 className = "Author">Written by {storyData.username}</h4>
                    <p  className = "totalVotes"><FavoriteIcon/> {votes+1}</p>
                </article>
            </div>
        )
        }
        else
        {
            return (
                <div className="stsory">
                    {setVotes(storyData.votes)}
                    <article>
                        <h1 className = "titles">{storyData.title}</h1>
                        <br/>
                        <p className = "story">{storyData.story}</p>
                        <br/>
                        <h4 className = "Author">Written by {storyData.username}</h4>
                        <p  className = "totalVotes"><FavoriteIcon  /> {votes}</p>
                    </article>
                </div>
            )
        }
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
