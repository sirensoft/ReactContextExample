import React from 'react'
import { Provider } from './AppContext'

import axios from 'axios';

class AppProvider extends React.Component {

    state = {
        input: '',
        random: '',
        changeInput: (_input) => {
            this.setState({
                input: _input
            })
        },
        randomNum:async ()=>{
            this.setState({random:''})
            let api = 'http://worldclockapi.com/api/json/utc/now';
            let resp =await axios.get(api)
            let time_ = resp.data.currentFileTime
            this.setState({random:time_?time_:''})
        }
    }
    
    componentDidMount(){
        //this.state.getTime();
    }

    render() {
       
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}

export default AppProvider;

