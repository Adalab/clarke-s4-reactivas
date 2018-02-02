import React from 'react';
import ReactDOM from 'react-dom';

class Profile extends React.Component {

	constructor(props){
   super(props);
   this.handleChange = this.handleChange.bind(this);
 }

 handleChange(event) {
        this.props.updatePreview(event.target.name,event.target.value);
  }

	componentWillUpdate() {
		if(this.props.scroll === true){
			const object = ReactDOM.findDOMNode(this.refs.contentProfile)
			console.log(object)
			window.scrollTo(0, object.offsetTop);
		}
	}

	render(){
		return(
			<div className="profile section">
				<div className="info">
					<h2 className="section-title">Perfil</h2>
					<div className="section-buttons">
						<input type="button" className="form__button--edit" value="Editar" onclick="editar('content-profile')" />
					</div>
				</div>

				<div id="content-profile" className="form__sectionContent" ref="contentProfile">
					<input type="text" name="name" id="name" placeholder="Nombre" onChange={this.handleChange} />
					<input type="text" name="lastname" id="lastname" placeholder="Apellidos" onChange={this.handleChange} />
					<input type="text" name="profession" id="profession" placeholder="Profesión" onChange={this.handleChange}/>
					<input type="button" name="delete" value="Borrar" className="delete-profile form__button--saveDeleteClose" />
					<input type="button" value="cerrar" className="form__button--saveDeleteClose" onclick="cerrar('content-profile')" />
				</div>
			</div>
		);
	}
}

export default Profile;
