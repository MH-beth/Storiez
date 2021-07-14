import React from 'react'
import "./Footer.css";
import FeedForm from './feedform/FeedForm'

export default function Footer() {
    return (
        <div>
            <FeedForm />
            <div className = "copyright">
                <p>@Copyright And All Right Reserved MH15O</p>
            </div>
        </div>
    )
}
