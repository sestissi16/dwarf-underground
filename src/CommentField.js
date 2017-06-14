import React, { Component } from 'react';
import './CommentField.css'

class CommentField extends Component{
    constructor(){
        super()
        this.state ={
            comments: [],
        }
    }
    handleSubmit(ev){
        ev.preventDefault()
        const comments = [...this.state.comments]
        comments.push(this.commentInput.value)
        this.setState({ comments })
        ev.currentTarget.reset()

    }
    renderComments(comment, i){
        return <li key={i}>{comment}</li>
    }

    render(){
        return(
            <div>
                <form onSubmit="" className="input-group">
                    <input className="input-group-field" type="text" ref={input => this.commentInput = input} />
                    <button className="button input-group-button" type="submit">Add Comment</button>
                </form>
                <ul className="comments">
                    {this.state.comments.map(this.renderComment)}
                </ul>
            </div>
        )
    }
}

export default CommentField