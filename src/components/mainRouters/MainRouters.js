import React from 'react'
import {BrowserRouter as Router , Route, Redirect, Switch} from "react-router-dom"
import Button from "@material-ui/core/Button";
import NotFound from "../errors/404/NotFound";
import FeedForm from "../footer/feedform/FeedForm";
import Footer from '../footer/Footer';
import AddStory from "../stories/addStory/AddStory";
import UsernameStory from '../stories/usernameStories/UsernameStory';
import Home from '../Home/Home';
import Story from '../stories/fetchStory/Story';
import AllStories from '../stories/allStories/AllStories';
import Navbar from '../header/navbar/Navbar';


function MainRouters() {
    return (
        <div>
            <Navbar />
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path = "/add-story" component={AddStory}></Route>
                    <Route exact path ="/all-stories" component={AllStories}></Route>
                    <Route exact path = "/user/:username" component={UsernameStory}></Route>
                    <Route exact path = "/:username/:title" component = {Story}></Route>
                    <Route path = "*" component={NotFound}/>
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}

export default MainRouters
