import React from 'react'
import {useEffect , useState} from "react";
import axios from 'axios';
import StoryFeds from '../stories/allStories/storryfeed/StoryFeds';
import CircularProgress from '@material-ui/core/CircularProgress';
import "./Laststories.css";


const LastStories = () => {

    const[statue , setStatue] = useState("");
    const [stories , setStories] = useState([]);


    useEffect(() => {
        axios.post("https://storiez-server.herokuapp.com/last-stories",{})
            .then(response => {
                if(response.data.statue)
                {
                    setStatue(response.data.statue);
                }else{
                    setStories(response.data.message);
                }
            })
    }, []);

    if(stories.length > 0)
    {
        return(
            <div className = "elementMapped">
                {stories.map(sto => (<StoryFeds story = {sto}/>))}
            </div>
        );
    }
    if(statue.length > 0){
        return(
            <div>
                <p>An Error Have Occured {statue}</p>
            </div>
        );
    }
    else
    {
        return(
            <div className = "wait">
                <CircularProgress />
            </div>
        );
    }
}

export default LastStories
