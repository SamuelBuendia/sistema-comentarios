import React from 'react';
import axios from "../../config/axios";
import Header from '../Header/Header'
import Comments from './Comments'

export default class CommentsList extends React.Component {
  state = {
    comments: [],
    view: '',
    idEdit: undefined
  }

  componentDidMount() {
    this.setState({view: 'list'})
  }

  componentDidUpdate(prevProps) {
    axios.get(`comments`)
      .then(res => {
        const comments = res.data;
        this.setState({ comments });
      })
  }

  removeMessage(id) {
    axios.delete(`comments/${id}`)
    .then(res => {
      const comments = res.data;
      // this.setState({ comments });
    })
  }

  changeView = (view, id) => {
    this.setState({view: view});
    if(view === "edit"){
      this.setState({idEdit: id});
    } else {
      this.setState({idEdit: undefined})
    }
  }

  render() {
    return (

      <div style={{minHeight:'90vh'}} className="pt-2">
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              {this.state.view === 'list' &&
              <div>
                <Header message={'LISTADO'}/>
                <div className='d-flex justify-content-end my-3'>
                  <button type="button" className="btn btn-success" onClick={()=> this.changeView("new")}>Agregar Comentario</button>
                </div>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Email</th>
                      <th scope="col">Website</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  {this.state.comments.length > 0 ? 
                    <tbody>
                      {this.state.comments.map(comment =>   
                        <tr>
                          <td>{comment.id}</td>
                          <td>{comment.name}</td>
                          <td>{comment.email}</td>
                          <td>{comment.web}</td>
                          <td>
                            <button type="button" className="btn btn-primary mr-2" onClick={()=> this.changeView("edit", comment.id)}>Editar</button>
                            <button type="button" className="btn btn-danger" onClick={()=> this.removeMessage(comment.id)}>Eliminar</button>
                          </td>
                        </tr> 
                      )}
                    </tbody>
                : 
                  <tbody>
                      <tr>
                        No hay registros
                      </tr> 
                  </tbody>
                }
                </table>
              </div>
              }

              {this.state.view !== 'list'  && 
              <div>
                <Comments view={this.state.view} idComm={this.state.idEdit} changeView={this.changeView} />
              </div>
              }

            </div>
          </div>
        </div>
      </div>


    )
  }
}