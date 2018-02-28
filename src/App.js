import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
    state = {
        books: []
    }

    getBooks = () => {
        BooksAPI.getAll().then((books) => {
            this.setState({ books: books })
        })
    }

    updateBookShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            this.getBooks()
        })
    }

    componentDidMount() {
        this.getBooks()
    }

    render() {
        return (
            <div className="app">
                <div className="list-books-title">
                    <h1>
                        My<span>•</span>Reads
                    </h1>
                </div>

                <Route exact path="/" render={() => (
                    <ListBooks
                        books={this.state.books}
                        onChange={this.updateBookShelf}
                     />
                )}/>

                <Route path="/search" render={() => (
                    <SearchBooks
                        books={this.state.books}
                        onChange={this.updateBookShelf}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp
