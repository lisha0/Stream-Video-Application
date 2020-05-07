import React from 'react';
import { Field, reduxForm } from 'redux-form'

class StreamForm extends React.Component{
    renderError({error, touched}){
        if (error && touched) {
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched? 'error': ''}`
        return(
            <div className={className}>
                <label>{label}</label>
                <input {...input}></input>
                {this.renderError(meta)}
            </div>
        )
    }

    render(){
        console.log('initialValues',this.props.initialValues);
        return(
            <form
                onSubmit={this.props.handleSubmit(this.props.onSubmit)}
                className="ui form error">
                <Field 
                    name="title" 
                    component={this.renderInput}
                    label='Enter Title'/>
                <Field 
                    name="description" 
                    component={this.renderInput}
                    label='Enter Description'/>
                <button className="ui button primary">Submit</button>
            </form>
        );
    };
};

//Or the function can have the same name 'validate' as the key
const validation = (formValues) => {
    let errors = {};
    if (!formValues.title){
        errors.title = 'You must enter a title!'
    }
    if (!formValues.description) {
        errors.description = 'You muse enter a description!'
    }
    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate: validation
})(StreamForm);