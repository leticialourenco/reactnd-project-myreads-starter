import React from 'react';
import { Link } from 'react-router-dom'
import DisplayShelf from "./DisplayShelf"

function ListBooks(props) {
    return (
        <div className="list-books">
            <div className="add-button">
                <Link
                    to="/search">
                    search
                </Link>
            </div>

            <DisplayShelf
                books={props}
                title={'Currently Reading'}
                value={'currentlyReading'}
                onChange={props.onChange}
            />

            <DisplayShelf
                books={props}
                title={'Want to Read'}
                value={'wantToRead'}
                onChange={props.onChange}
            />

            <DisplayShelf
                books={props}
                title={'Read'}
                value={'read'}
                onChange={props.onChange}
            />
        </div>
    )
}

export default ListBooks