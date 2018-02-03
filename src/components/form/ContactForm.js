import React from 'react';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.editForm=this.editForm.bind(this);
		this.state = {
			editForm: false
}
	}

	editForm() {
		this.setState({editForm: !this.state.editForm})
	}

	render(){
		return(
			<div className="contact-information section">
				<div className="info">
					<h2 className="section-title">Datos de contacto</h2>
					<div className="section-buttons">
						<button type="button" className="form__button--edit" value="Editar" onClick={this.editForm}> Editar  </button>
					</div>
				</div>
				{ this.state.editForm === true ? <div id="content-contact-info" className="form__sectionContent">
					<input type="tel" name="telephone" id="telephone" placeholder="Teléfono" />
					<span className="error error_telephone"></span>
					<input type="email" name="email" id="email" placeholder="Email" />
					<span className="error error_email"></span>
					<input type="button" name="save" value="Guardar" className="saveContact form__button--saveDeleteClose" />
					<input type="button" name="delete" value="Borrar" className="delete-contact form__button--saveDeleteClose" />
					<input type="button" value="cerrar" className="form__button--saveDeleteClose" onclick="cerrar('content-contact-info')" />
				</div> : null }
			</div>
		);
	}
}

export default Contact;
