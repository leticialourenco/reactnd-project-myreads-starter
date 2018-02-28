import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DisplayShelf from "./DisplayShelf"

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
                    <Link className="close-search"
                        to='/'>
                        Close
                    </Link>

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
                        onChange={this.props.onChange}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBooks