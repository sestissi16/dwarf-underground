import React, { Component } from 'react';
import './OtherArticles.css'

class OtherArticles extends Component {
    createLink(link, index){
        return(
            <div key={index} className="small-6 medium-3 columns other-article">
                <a href="#">
                    <img src={link.src} alt={link.alt} />
                    <p>{link.para}</p>
                </a>
            </div>
        )
    }
    
   
    render(){
        return(
            <div className="small-12 columns other-articles">
                <h2>From around the Realm</h2>
                {this.props.Links.map(this.createLink)}
            </div>
        )
    }
}

export default OtherArticles