import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DisplayShelf from "./DisplayShelf"

class ListBooks extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="add-button">
                    <Link
                        to="/search">
                        search
                    </Link>
                </div>

                <DisplayShelf
                    books={this.props}
                    title={'Currently Reading'}
                    value={'currentlyReading'}
                    onChange={this.props.onChange}
                />

                <DisplayShelf
                    books={this.props}
                    title={'Want to Read'}
                    value={'wantToRead'}
                    onChange={this.props.onChange}
                />

                <DisplayShelf
                    books={this.props}
                    title={'Read'}
                    value={'read'}
                    onChange={this.props.onChange}
                />
            </div>
        )
    }
}

export default ListBooks