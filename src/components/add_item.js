import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class AddItem extends Component {
    renderInput(props) {
        console.log('Render Input Arguments:', props); 
        return (
            <div className="row">
                <div className="s12">
                    <label>Label Here</label>
                    <input {...props.input} type="text"/>
                </div>
            </div>
        );
    }

    saveItem = (values) => {
        console.log('Fom Values:', values);
    }


    render() {
        console.log('Add Item Props:', this.props);
        const { handleSubmit } = this.props;

        return (
            <div>
                <h1 className="center">Add Item</h1>
                <div className="row">
                    <div className="col s8 offset-s2">
                        <form onSubmit={handleSubmit(this.saveItem)}>
                            <Field name="title" component={this.renderInput} />
                            <Field name="details" component={this.renderInput} />
                            <div className="row">
                                <div className="s12 right-align">
                                    <button className="btn blue-grey darken-1">Add Item</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default reduxForm({
    form: 'add-item' //can be any name
})(AddItem);