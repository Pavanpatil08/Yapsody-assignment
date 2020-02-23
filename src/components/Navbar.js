import React from 'react';
import ReactDOM from 'react-dom'
export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-warning bg-warning">
                <a class="navbar-brand">Yapsody assignment</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        )
    }

}