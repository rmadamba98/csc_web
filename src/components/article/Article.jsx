import React from 'react'
import { Component } from 'react'
import './article.css'

class Article extends Component {
    render() {
        const {name, desc} = this.props
        return (
            <div>
                <h1>
                    {name}
                </h1>
                <h2>
                    {desc}
                </h2>
            </div>
        );
    }
}
 
export default Article;





