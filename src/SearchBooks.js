import React, { Component } from 'react';
import DisplayShelf from "./DisplayShelf";

class SearchBooks extends Component {
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query })
    }

    render() {
        const { query } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>

                    <div className="search-books-input-wrapper">
                        <input
                            type='text'
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                            placeholder='Search by title or author'
                        />
                    </div>
                </div>

                <div className="search-books-results">
                    <DisplayShelf
                        books={this.props}
                        value={query}
                        title={'searchResults'}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBooks