import React, { Component } from 'react';
import './AdImage.css'

class AdImage extends Component{
    render(){
        return(
            <div className="ad-image">
                <img src="https://s-media-cache-ak0.pinimg.com/originals/b4/d5/ab/b4d5ab4a82b8f7efc1adaf548df1d089.jpg" alt="hammer" />
                <a href="#">visit sponsor</a>
            </div> 
        )
    }
}

export default AdImage