import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        example: state.example
    };
};

class App extends Component {

    render() {
        let { example } = this.props;

        return (
            <div>
                Whaddup { example.cat }
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
