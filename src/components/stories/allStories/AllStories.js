import React , {useEffect}from 'react'
import Axios from "axios";
import StoryFeds from './storryfeed/StoryFeds';
import "./Storiez.css";

const AllStories = () => {

    const [statue , setStatue] = React.useState("");
    const [stories , setStories] = React.useState([]);

    useEffect(() => {
        Axios.post("https://storiez-server.herokuapp.com/all-stories", {})
            .then(response => {
                if(response.data.statue)
                {
                    setStatue(response.data.statue);
                }else{
                    setStories(response.data.message);
                }
            })
    }, []);

    if(stories !==undefined )
    {
      return(
        <div className = "mappe">
          <ul>
          {stories.map((sto , key) => {
            return(
              <div>
                <li><StoryFeds story={sto}/></li>
              </div>
            );
          })}
          </ul>
        </div>
      )
    }else {
      return(
        <div>
          <p>Opps An error have occured : {statue}</p>
        </div>
      )
    }
}

export default AllStories
