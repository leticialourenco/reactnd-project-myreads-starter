import React, { Component } from 'react';

class BookItem extends Component {
    updateBookShelf = (event) => {
        this.props.onChange(event.target.value)
    }

    render() {
        const { book } = this.props

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                         style={{
                             width: 128,
                             height: 193,
                             backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'images/default-thumbnail.jpg'})`
                         }}>
                    </div>

                    <div className="book-shelf-changer">
                        <select
                            onChange={this.updateBookShelf}
                            value={book.shelf}>

                            <option disabled>Move to...</option>
                            <option value="none">None</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors ? book.authors.join(', ') : 'Unknown'}</div>
            </div>
        )
    }
}

export default BookItem