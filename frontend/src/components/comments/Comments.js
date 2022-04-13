import React from 'react';
import axios from "../../config/axios";
import Header from '../Header/Header.js'

export default class Comments extends React.Component {
    state = {
        view: "",
        name: "",
        email: "",
        web: "",
        comment: ""
    }

    componentDidMount() {
        console.log(this.props)
        if(this.props.view == 'new'){
            this.setState({view: "CREACIÓN"});
        } else {
            this.setState({view: "EDICIÓN"});
            axios.get(`comments/${this.props.idComm}`)
                .then(res => {
                    const comments = res.data[0];
                    this.setState({ 
                        name: comments.name,
                        email: comments.email,
                        web: comments.web,
                        comment: comments.comment
                     });
                })

        }
    }

    saveComment = async (e) => {
        e.preventDefault();
        if(this.state.view === "CREACIÓN") {
            this.createComments()
        } else {
            this.updateComments()
        }
    }

    createComments = async() =>{
        const { name, email, web, comment } = this.state;
        try {
            const form = await axios.post('/comments', {
                name,
                email,
                web,
                comment
            });
            console.log(form)
            // this.setState({name: "", email: '', web: '', comment: ''});
            this.props.changeView("list");
        } catch (error) {
            console.log(error)
        }
    }

    updateComments = async() =>{
        const { name, email, web, comment } = this.state;
        try {
            const form = await axios.put(`/comments/${this.props.idComm}`, {
                name,
                email,
                web,
                comment
            });
            console.log(form)
            // this.setState({name: "", email: '', web: '', comment: ''});
            this.props.changeView("list");
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div className='col-12'>
                <Header message={this.state.view}/>
                <form onSubmit={this.saveComment} className="mt-4 d-flex flex-column align-items-center" style={{textAlign:'left'}}>
                    <div className="form-group col-6">
                        <label>Nombre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.name}
                            onChange={(e) => { this.setState({ name: e.target.value }); }}
                            required
                        />
                    </div>
                    <div className="form-group col-6 mt-2">
                        <label>Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            value={this.state.email}
                            onChange={(e) => { this.setState({ email: e.target.value }); }}
                            required
                        />
                    </div>
                    <div className="form-group col-6 mt-2">
                        <label>Web</label>
                        <input 
                            type="url" 
                            className="form-control" 
                            value={this.state.web}
                            onChange={(e) => { this.setState({ web: e.target.value }); }}
                            required
                        />
                    </div>
                    <div className="form-group col-6 mt-2">
                        <label>Comentario</label>
                        <textarea 
                            type="url" 
                            className="form-control" 
                            value={this.state.comment}
                            onChange={(e) => { console.log(this.state); this.setState({ comment: e.target.value }); }}
                            required
                        />
                    </div>
                    <div className="col-6 mt-2" style={{textAlign:'end'}}>
                        <button type="submit" className="btn btn-light" onClick={()=> this.props.changeView("list")}>Cancelar</button>
                        <button type="submit" className="btn btn-success">Guardar</button>
                    </div>
                </form>
            </div>
        )
    }
}