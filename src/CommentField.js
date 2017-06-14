import React, { Component } from 'react';
import './CommentField.css'

class CommentField extends Component{
    constructor(){
        super()
        this.state ={
            comment: '',
            comments: [],
        }
        this.updateComment = this.updateComment.bind(this)
        this.addComment = this.addComment.bind(this)
    }
    updateComment(ev){
        this.setState({
            comment: ev.target.value
        })
    }
    // handleSubmit(ev){
    //     ev.preventDefault()
    //     const comments = [...this.state.comments]
    //     comments.push(this.commentInput.value)
    //     this.setState({ comments })
    //     //ev.currentTarget.reset() doesn't work says reset is not a function

    // }
    // renderComments(comment, i){
    //     return <li key={i}>{comment}</li>
    // }
    addComment(ev){
        const comment = {
            timestamp: new Date(),
            text: this.state.comment
        }
        const state= {...this.state}
        state.comments.push(comment)
        state.comment=''
        this.setState(state, ()=>console.log(this.state))
    }

    render(){
        return(
            <div className='comments'>
                 <textarea 
                    value={this.state.comment}
                    onChange={this.updateComment}
                    placeholder="Enter comment here">
                </textarea>
                <button onClick={this.addComment} className="button">Submit Comment</button>
            </div>
        )
    }
    //<textarea value=
    // render(){
    //     return(
    //         <div>
    //             <form onSubmit="" className="input-group">
    //                 <input className="input-group-field" type="text" ref={input => this.commentInput = input} />
    //                 <button className="button input-group-button" type="submit" onClick={this.handleSubmit.bind(this)}>Add Comment</button>
    //             </form>
                
    //             <ul className="comments">
    //                 {this.state.comments.map(this.renderComments)}
    //             </ul>
    //         </div>
    //     )
    // }
}

export default CommentField