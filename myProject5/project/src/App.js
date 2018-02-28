import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookshelfs from './Bookshelfs'
import Books from './Books' //导入新建的book组件

import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on,use the URL in the browser's address bar.This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages,as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    bookshelfs: [],
    query: '',
    searchBooks: []
    
  }
  //
  componentDidMount() {
    BooksAPI.getAll().then((bookshelfs) =>{
      this.setState({bookshelfs})//此处原型为this.setState({bookshelfs: bookshelfs})
    })
  }
 
  //用于查询图书信息
  updateQuery = (query)=>{
    this.setState({query})
  }
  getSearchBooks = (query)=> {
    BooksAPI.search(this.state.query).then((books)=>{
      
                if(books&&(!books.error)){
                  for(var index in books){
                    
                    if(!books[index].shelf){
                     // books[index].shelf = "none"
                    }
                  }
                  console.log(books);
                  //this.setState({searchBooks : books})
                
                } 
              })
  }
  render(){
    if(this.state.query){
      this.getSearchBooks(this.state.query);
    }
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={()=>this.setState({showSearchPage: false})}>Close</a>
              <div className="serch-books-input-wrapper">
                {
                  /**
                   * NOTES: The search from BooksAPI is limited to a particular set of search terms.
                   * You can find these search terms here:
                   * ttps://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                   * However,remember that the BooksAPI.search method DOES search by title or author.So,
                   * don't worry if you don't find a specific author or title.Every search is limited by search terms.
                   */
                }
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value = {this.state.query}
                    onChange = {(event)=>this.updateQuery(event.target.value)}
                />
              </div>
            </div>
            <div className="search-books-results">
                <Books shelf={this.state.searchBooks}/>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              
              {console.log(this.state.bookshelfs)}
              <Bookshelfs bookshelfs = {this.state.bookshelfs}/> 
                
             
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
