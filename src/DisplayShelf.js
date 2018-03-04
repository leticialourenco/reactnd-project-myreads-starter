import React, { Component } from 'react';
import BookItem from './BookItem'

class DisplayShelf extends Component {

    updateBookShelf = (book, shelf) => {
        this.props.onChange(book, shelf)
    }

    render() {
        const {
            books,
            title,
            value
        } = this.props

        let bookList = []

        if (title === 'searchResults') {
            /* if statement works as a helper
             * so during the first iteration
             * the Warning message won't show
             */
            if(books.length === 0) {
                return (<div></div>)

            } else if (books.length) {
                return (
                    <div>
                        <ol className="books-grid">
                            { books.map((book) => (
                                <li key={book.id}>
                                    <BookItem
                                        book={book}
                                        onChange={(shelf) => {
                                            this.props.onChange(book, shelf)
                                        }}
                                    />
                                </li>
                            ))}
                        </ol>
                    </div>
                )
            } else {
                return (
                    <div className="warning">
                        Sorry, no matches were found, try another term
                    </div>
            )}

        } else {
            bookList = books.books.filter((book) => book.shelf === value)

            return (
                <div className="bookshelf">
                    <h2 className="bookshelf-title"><span>{title}</span></h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            { bookList.map((book) => (
                                <li key={book.id}>
                                    <BookItem
                                        book={book}
                                        onChange={(shelf) => {
                                            this.updateBookShelf(book, shelf)
                                        }}
                                    />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            )
        }
    }
}

export default DisplayShelf