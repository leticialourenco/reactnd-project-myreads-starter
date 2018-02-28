import React, { Component } from 'react';
import BookItem from './BookItem'
import escapeRegExp from 'escape-string-regexp'

class DisplayShelf extends Component {
    updateBookShelf = (book, shelf) => {
        this.props.onChange(book, shelf)
    }

    render() {
        const { books } = this.props.books
        let bookList = ''

        if (this.props.title === 'searchResults') {
            if (this.props.value !== '') {

                let match = new RegExp(escapeRegExp(this.props.value), 'i')
                bookList = books.filter((book) => (match.test(book.title)) || (match.test(book.authors)))

                if( bookList.length === 0 ) {
                    return (
                        <div>
                            Sorry, no results were found, check your spelling or try another title or author.
                        </div>)
                } else {
                    return (
                        <div>
                            <ol className="books-grid">
                                { bookList.map((book) => (
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
                }
            } else {
                return (<div></div>)
            }

        } else {
            bookList = books.filter((book) => book.shelf === this.props.value)

            return (
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.props.title}</h2>
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