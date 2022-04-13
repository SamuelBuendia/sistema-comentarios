import React from 'react';
import axios from "../../config/axios";

export default class Footer extends React.Component {
    state = {
        version: ''
    }

    componentDidMount() {
    axios.get(`version/`)
        .then(res => {
        const version = res.data;
        this.setState( version );
        })
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='border border-secondary py-4'>
                            {this.state.version}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}