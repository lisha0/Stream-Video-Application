import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import history from '../../history';
import { fetchStream, deleteStream } from '../../redux/actions';

class StreamDelete extends React.Component {
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
    }
    renderContent(){
        return 'Are you sure you want to delete this stream?'
    }
    renderActions(){
        return(
            <React.Fragment>
                <button onClick={this.onClick} className="ui button primary">
                    Delete
                </button>
                <Link to='/' className="ui button">
                    Cancel
                </Link>
            </React.Fragment>
        )
    }

    onClick = () => {
        this.props.deleteStream(this.props.match.params.id);
    }
    render(){
       return(
            <Modal
                header = "Delete Stream"
                content = {this.renderContent()}
                actions = {this.renderActions()}
                onDismiss = {()=>history.push('/')}/>
        ); 
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);