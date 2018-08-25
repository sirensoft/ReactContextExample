import React from 'react'

import { Consumer } from './AppContext'

export default class Display extends React.Component {
    render() {
        return (
            <Consumer>
                {(context) =>
                    <div>
                        <h3>1.Dispaly Component</h3>
                        <p>input: {context.input} <br /> random : {context.random}</p>
                    </div>
                }
            </Consumer>
        )
    }
}