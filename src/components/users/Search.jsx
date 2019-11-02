import React, { Component } from 'react';

class Search extends Component {
    state = {
        text: ''
    };

    handleChange = event => this.setState({ [event.target.name]: event.target.value });

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please enter something', 'light')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    };

    render() {

        const { showClear, clearUsers } = this.props;

        return (
            <div>
                <form
                    className="form"
                    onSubmit={this.handleSubmit}
                >
                    <input
                        type="text"
                        name="text"
                        id=""
                        placeholder="Search users ..."
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {
                    showClear && <button
                        className="btn btn-light btn-block"
                        onClick={clearUsers}
                    >Clear</button>
                }

            </div>
        )
    }
}

export default Search;
