import React from 'react';

class Send extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            currUser: 'cmvnk'
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addMsg(this.state.input);
    }

    render() {
        console.log(this.state)
        return (
            <section className="send-form">
                <form onSubmit={this.handleSubmit}>
                    <input name="input" value={this.state.input} onChange={this.handleChange} type="text"/>
                    <input type="submit"/>
                </form>
            </section>
        );
    }
};

export default Send;