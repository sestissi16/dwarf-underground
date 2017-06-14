import React, { Component } from 'react';
import './Avatar.css'
import AvatarImage from './AvatarImage'

class Avatar extends Component{
    render(){
        return(
            <div className="avatar">
                <AvatarImage />
                <div className="author-info">
                    <p className="author-name">By Domri, son of Flug</p>
                    <p className="date">on 28 April, 3018 of the Third Age</p>
                </div>
            </div>
        )
    }
}

export default Avatar