import React, { Component } from 'react';
import './ArticleLinks.css'
import CommentField from './CommentField'


class ArticleLinks extends Component{
    constructor(){
        super()
        this.state = {showComments: false}
    }
    toggleComments(ev){
        ev.preventDefault()
        if(this.state.showComments){
            this.setState({showComments: false})
        }
        else{
            this.setState({showComments: true})
        }
        //This does the same thing as the if/else statement
        //this.setState({showComments: !this.state.showComments}, ()=> console.log(this.state)) <-says when your done with first part run the next function
    }
    render(){
        let comments
            if(this.state.showComments){
                comments=(
                    <div>
                    <CommentField />
                    </div>
                )
            }
            //{this.state.showComments ? iftruedothis : elsedothis} <-could use this instead of the if statement above and the {comments} down below
        return(
            <div>
                <div className="article-links">
                    <a className="article-link" href="#" onClick={this.toggleComments.bind(this)}>
                        <i className="fa fa-comments-o"></i>
                        <span className="article-link-text">Comments</span>
                    </a>
                    <a className="article-link" href="#">
                        <i className="fa fa-share"></i>
                        <span className="article-link-text">Share Post</span>
                    </a>
                </div>
                {comments}
                
            </div>
        )
    }
}

export default ArticleLinks