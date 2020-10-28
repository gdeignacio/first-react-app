import React, { Component } from 'react';
import { LoginButton } from './LoginButton';
import LogoutButton from './LogoutButton';

export default class LoginControl extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            entra: false
        };
    }

    manejarLoginClick = () => this.setState({entra: true});
    manejarLogoutClick = () => this.setState({entra: false});

    render() {
        let boton;

        if(this.state.entra){
            boton = <LogoutButton pulsar = {this.manejarLogoutClick}/>
        }
        else{
            boton = <LoginButton pulsar = {this.manejarLoginClick}/>
        }

        return(
            <div>
                {boton}
            </div>
        );
    }
}