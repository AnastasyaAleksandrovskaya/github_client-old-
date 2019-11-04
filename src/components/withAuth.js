import React, { Component } from 'react';
import AuthService from './AuthService';

export default function withAuth(AuthComponent) {
    const Auth = new AuthService('http://localhost:8080');
    return class AuthWrapped extends Component {
        constructor() {
            super();
            this.state = {
                user: null
            }
        }
        componentWillMount() {
            if (!AuthService.loggedIn()) {

                console.log(AuthService.loggedIn());
                this.props.history.replace('/login')
            }
            else {
                try {
                    const profile = AuthService.getProfile()
                    this.setState({
                        user: profile
                    })
                }
                catch(err){
                    AuthService.logout()
                    this.props.history.replace('/login')
                }
            }
        }
        render() {
            if (this.state.user) {
                return (
                    <AuthComponent history={this.props.history} user={this.state.user} />
                )
            }
            else {
                return null
            }
        }
    }
}


