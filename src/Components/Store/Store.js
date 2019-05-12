import React from 'react'

class Store extends React.Component {
    constructor(props) {
        super(props)
        //Main State of the application
        this.state = {
            appName: "MyWeather"
        }
    }

    render() {
        return React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {...this.state})
        })
    }

}

export default Store