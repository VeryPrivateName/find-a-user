import React, { Component } from "react";
import PropTypes from "prop-types";

export class Search extends Component {
    state = {
        text: ""
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    };

    onSubmit = e => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Text is missing', 'light')
        } else {
            this.props.searchUsers(this.state.text);
            this.setState({ text: "" });
        }
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {

        const { showClear, clearUsers } = this.props;

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search Users"
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Search"
                        className="btn btn-dark btn-block"
                    />
                </form>
                {showClear && (
                    <button
                        className="btn btn-light btn-block"
                        onClick={clearUsers}
                    >
                        Clear
                    </button>
                )}

            </div>
        );
    }
}

export default Search;


# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
