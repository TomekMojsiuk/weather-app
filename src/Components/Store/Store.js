import React from 'react'
import { EventEmitter } from 'events';
class Store extends React.Component {
    constructor(props) {
        super(props)

        this.eventEmitter = new EventEmitter();

        //Main State of the application
        this.state = {
            appName: "MyWeather"
        }
    }

    render() {
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, 
                {...this.state, eventEmitter: this.eventEmitter})
        })
    }

}

export default Store