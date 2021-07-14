import React from 'react'
import "./Navbar.css";
import BookIcon from '@material-ui/icons/Book';

const Navbars = () => {
  return (
    <div>
        <header>
            <nav>
                <label class="logo"><BookIcon /> Storiez</label>
                <ul class='pasi'>
                    <li><a className='active' href='/'>Home</a></li>
                    <li><a href='/all-stories'>Stories</a></li>
                    <li><a href='/add-story'>Write Your Story</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbars
