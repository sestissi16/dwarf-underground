import React, { Component } from 'react';
import './Avatar.css'
import AvatarImage from './AvatarImage'
import AuthorInfo from './AuthorInfo'

class Avatar extends Component{
    render(){
        return(
            <div className="avatar">
                <AvatarImage />
                <AuthorInfo />
            </div>
        )
    }
}

export default Avatar