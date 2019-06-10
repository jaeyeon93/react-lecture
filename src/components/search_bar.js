import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: 'Starting Value' };
    }

    render() {
        // this.state.term = event.target.value => very bad expression
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={ event => this.onInputChange(event.target.value) } />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;