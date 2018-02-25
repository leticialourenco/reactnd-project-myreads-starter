import React, { Component } from 'react';
import BookItem from './BookItem'
import escapeRegExp from 'escape-string-regexp'

class DisplayShelf extends Component {
    render() {
        const { books } = this.props.books
        let bookList = books.filter((book) => book.shelf === this.props.value)

        if (this.props.title === 'searchResults') {
            let match = new RegExp(escapeRegExp(this.props.value), 'i')
            bookList = books.filter((book) => (match.test(book.title)) || (match.test(book.authors)))

            return (
                <div>
                    <ol className="books-grid">
                        { bookList.map((book) => (
                            <li key={book.id}>
                                <BookItem
                                    book={book}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            )} else {
            return (
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.title}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            { bookList.map((book) => (
                                <li key={book.id}>
                                    <BookItem
                                        book={book}
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