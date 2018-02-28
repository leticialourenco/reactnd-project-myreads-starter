import React, { Component } from 'react';

class BookItem extends Component {
    updateBookShelf = (event) => {
        this.props.onChange(event.target.value)
    }

    render() {
        const { book } = this.props

        const getAuthorList = () => {
            return book.authors ? book.authors.join(', ') : 'unknown'
        }

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                         style={{
                             width: 128,
                             height: 193,
                             backgroundImage: `url(${book.imageLinks.thumbnail})`
                         }}>
                    </div>

                    <div className="book-shelf-changer">
                        <select
                            onChange={this.updateBookShelf}
                            value={book.shelf}>

                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{getAuthorList()}</div>
            </div>
        )
    }
}

export default BookItem