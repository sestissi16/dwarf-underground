import React, { Component } from 'react';

class Comments extends Component{
    constructor(){
        super()

        this.state= {
            comment: '',
            comments:[],
        }
        this.updateComment = this.updateComment.bind(this)
        this.addComment = this.addComment.bind(this)
    }

    updateComment(ev){
        this.setState({
            comment: ev.target.value
        })
    }

    addComment(ev){
        const comment = {
            timestamp: new Date(),
            text: this.state.comment
        }
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
                {this.state.comment.map((comment, i)=> <Comment comment={comment} key={i}/>)}
            </div>
        )
    }
}