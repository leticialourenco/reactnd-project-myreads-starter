import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DisplayShelf from "./DisplayShelf"

class ListBooks extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>

                <DisplayShelf
                    books={this.props}
                    title={'Currently Reading'}
                    value={'currentlyReading'}
                />

                <DisplayShelf
                    books={this.props}
                    title={'Want to Read'}
                    value={'wantToRead'}
                />

                <DisplayShelf
                    books={this.props}
                    title={'Read'}
                    value={'read'}
                />

                <div className="open-search">
                    <Link
                        to="/search"
                        Add a book >
                    </Link>
                </div>
            </div>
        )
    }
}

export default ListBooks