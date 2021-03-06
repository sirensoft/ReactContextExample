import React from 'react';

import { Consumer } from './AppContext'

export default class Red extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
        this.inputRef = React.createRef()
    }

    onChange = (e) => {
        this.setState({
            name: [e.target.value]
        })
    }
    onSubmit = (context) => (e) => {
        e.preventDefault()
        context.changeInput(this.state.name)
        context.randomNum();
        this.setState({ name: '' })
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }

    render() {
        return (
            <Consumer>
                {(context) =>
                    <div style={{ color: 'red' }}>
                        <h3>1.Red Component</h3>
                        <form onSubmit={this.onSubmit(context)}>
                            <input ref= {this.inputRef} onChange={this.onChange} value={this.state.name} placeholder='input data..' /> <span>&#9166;</span>
                            <div >{context.input}<br />{context.random}</div>
                        </form>
                    </div>

                }
            </Consumer>
        )
    }


}




