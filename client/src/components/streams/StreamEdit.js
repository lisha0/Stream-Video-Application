import React from 'react';
import StreamForm from './StreamForm';
import { connect } from 'react-redux';
import {fetchStream, updateStream} from '../../redux/actions';


class StreamEdit extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }

    onSubmit = formValues => {
        this.props.updateStream(this.props.match.params.id, formValues)
    }
    render(){
        return(
            <div>
                <h2>Stream Edit</h2>
                <StreamForm 
                    initialValues={this.props.stream}
                    onSubmit={this.onSubmit}
                    
                />
            </div> 
        );
    }   
};

const mapStateToProps = (state , ownProps)=> {
    return {
        stream: state.streams[ownProps.match.params.id]
    }   
}

export default connect(mapStateToProps, {fetchStream, updateStream})(StreamEdit);