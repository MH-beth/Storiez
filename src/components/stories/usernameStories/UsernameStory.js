import React , {useEffect} from 'react'
import "./UsernameStory.css";
import Storyfeed from "../storySmall/Storyfeed"
import Axios from "axios";
import NotFound from '../../errors/404/NotFound';




const UsernameStory = ({match}) => {

    const [statue , setStatue] = React.useState("");
    const [storie , setStorie] = React.useState();

    useEffect(() => {
        const urls = match.params.username;
        Axios.post("https://storiez-server.herokuapp.com/user/"+urls, {})
            .then((response) => {
                if(response.data.statue)
                {
                    setStatue(response.data.statue);
                }
                if(response.data.message){
                  setStorie(response.data.message);
                }
            });
    }, []); 
    if(storie !==undefined )
    {
      return(
        <div>
          <h1 className = "username">{match.params.username}</h1>
          <ul>
          {storie.map((sto , key) => {
            return(
              <div>
                <li><Storyfeed story={sto}/></li>
              </div>
            );
          })}
          </ul>
        </div>
      )
    }else {
      return(
        <div>
          <NotFound />
        </div>
      )
    }
}

export default UsernameStory