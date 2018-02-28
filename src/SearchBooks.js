import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DisplayShelf from "./DisplayShelf"
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
    state = {
        query: '',
        results: []
    }

    updateQuery = (query) => {
        this.setState({ query: query })
        this.searchBooks(query)
    }

    searchBooks = (query) => {
        if (query.length) {
                BooksAPI.search(query).then((results) => {
                    if (results.length) {
                        results = this.updateShelfInfo(results)
                    }
                    this.setState({results: results})
            })
        } else {
            return this.setState({query: '', results: []})
        }
    }

    updateShelfInfo = (results) => {
        let books = this.props.books

        for (let result of results) {
            for (let book of books) {
                if (result.id === book.id) {
                    result.shelf = book.shelf
                }
            }
        }

        return results
    }

    render(){
        let query = this.state.query
        let results = this.state.results

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
                        books={results}
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