import React from 'react'
import { Consumer } from './AppContext'

export default class Green extends React.Component {

    
    componentDidMount(){
       console.log(this.props)
    }

    render() {
        return (
            <Consumer>
                {(context) =>
                    <div style={{ color: 'green' }}>
                        <h3>2.Green Component</h3>
                        <div>{context.input}</div>
                    </div>
                }
            </Consumer>
        )
    }

}