import React from 'react'

import { Consumer } from './AppContext'

export default class Display extends React.Component {
    render() {
        return (
            <Consumer>
                {(context) =>
                    <div>
                        input: {context.input} <br /> random : {context.random}
                    </div>
                }
            </Consumer>
        )
    }
}