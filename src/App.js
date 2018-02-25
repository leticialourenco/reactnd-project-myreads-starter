import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
          <Route exact path="/" render={() => (
              <ListBooks
                  books={this.state.books}
              />
          )}/>

          <Route path="/search" render={() => (
              <SearchBooks
                  books={this.state.books}
              />
          )}/>
      </div>
    )
  }
}

export default BooksApp
