import React, { Component } from 'react';

class Ninjas extends Component {

    render() {
        const {name, age , hobby} = this.props
        return (
            <div className='ninja'>
                <div>Name : {name}</div>
                <div>Age : {age}</div>
                <div>Hobby : {hobby}</div>
            </div>
        )
    }
}

export default Ninjas;