import React , {useEffect}from 'react'
import Axios from "axios";
import StoryFeds from './storryfeed/StoryFeds';

const AllStories = () => {

    const [statue , setStatue] = React.useState("");
    const [stories , setStories] = React.useState([]);

    useEffect(() => {
        Axios.post("http://localhost:8080/all-stories", {})
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
        <div>
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
