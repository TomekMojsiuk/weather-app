import React from 'react'

import './Button.scss'

class Button extends React.Component {


    render () {
        return <button className='btn btn--select--location' {...this.props} >Select Location</button>
    }
}

export default Button