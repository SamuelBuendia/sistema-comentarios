import React from 'react';

export default class Header extends React.Component {
    state = {
        message: this.props.message
    }

    componentDidMount() {
        console.log("hola", this.props.message)
    }

    render() {
        return (
            <div className='border border-secondary py-4'>
                {this.state.message} DE COMENTARIOS
            </div>
        )
    }
}