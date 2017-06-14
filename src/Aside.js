import React, { Component } from 'react';
import './Aside.css'
import Ad from './Ad'

class Aside extends Component{
    render(){
        return(
            <aside className="large-4 medium-12 columns">
                <Ad />
            </aside>
        )
    }
}

export default Aside