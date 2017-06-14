import React, { Component } from 'react';
import './Article.css'
import ArticleTitle from './ArticleTitle'
import Avatar from './Avatar'
import ArticleBody from './ArticleBody'
import ArticleLinks from './ArticleLinks'

class Article extends Component{
    render(){
        return(
            <div className="large-8 medium-12 columns article">
                <ArticleTitle />
                <Avatar />
                <ArticleBody />
                <ArticleLinks />
            </div>
        )
    }
}

export default Article