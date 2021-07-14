import React from 'react'
import "./Home.css";
import LastStories from '../LastStories/LastStories';
import Search from '../stories/searchStory/Search';

const Home = () => {
    return (
        <div>
            <Search />
            <h1 className = "title">Top 5 Last Stories :</h1>
            <LastStories />
        </div>
    )
}


export default Home;