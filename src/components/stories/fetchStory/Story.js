import React from 'react'
import Axios from "axios";
import {useEffect , useState} from "react";
import StoryArticle from '../storyArticle/StoryArticle';

const Story = ({match}) => {
    const username = match.params.username;
    const title = match.params.title;
    const [statue , setStatue] = useState("Succesfully Found");
    const [storyData , setStoryData] = useState({});

    const url = `https://storiez-server.herokuapp.com/story/${username}/${title}`;

    useEffect(() => {
        Axios.post(url , {})
            .then((response) => {
                if(response.data.statue)
                {
                    setStatue(response.data.statue);
                }else{
                    setStoryData({
                        username : response.data[0].username,
                        title : response.data[0].title,
                        votes : response.data[0].votes,
                        story : response.data[0].story,
                    })
                }
            })
    } , [])

    return (
        <div>
            <StoryArticle storyData = {storyData}/>
        </div>
    )
}

export default Story
