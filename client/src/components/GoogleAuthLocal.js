import React from 'react';

class GoogleAuth extends React.Component{
    constructor(props){
        super(props);
        this.state = {isSignedIn: null};
    }
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId: 
                        '721913565446-lfl3ps1922cd4tb1pjnblfuodng5rqs8.apps.googleusercontent.com',
                    scope: 'email'
                })
                .then( () => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.setState({isSignedIn: this.auth.isSignedIn.get()});
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        })
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton(){
        if (this.state.isSignedIn === null) {
            return null;
        } else if (this.state.isSignedIn){
            return(
                <button onClick={this.onSignOutClick}>Sign Out</button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick}>Sign In with Google</button>
            );
        }
    }
    render(){
        return(
            <div>{this.renderAuthButton()}</div>
        )
    }
}

export default GoogleAuth;