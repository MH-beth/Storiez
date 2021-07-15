import React from 'react'
import "./Navbar.css";
import BookIcon from '@material-ui/icons/Book';
import Button from "@material-ui/core/Button"
import Grid from '@material-ui/core/Grid';

const Navbars = () => {
  return (
    <div>
        <header>
            <nav>
                <label className="logo"><BookIcon /> Storiez</label>
                <ul className='pasi'>
                    <li><a className='active' href='/'>Home</a></li>
                    <li><a href='/all-stories'>Stories</a></li>
                    <li><a href='/add-story'>Write Your Story</a></li>
                </ul>
            </nav>
        </header>
        <div className = "phone">
          <h1>Menue</h1>
          <Button variant="contained" color="primary" href = "/"  >Home</Button>
          <Button variant="contained" color="primary"href = "/all-stories"  >Storiez</Button>
          <Button variant="contained" color="primary" href = "/add-story" >Write Your Storiez</Button>
        </div>
    </div>
  )
}

export default Navbars
