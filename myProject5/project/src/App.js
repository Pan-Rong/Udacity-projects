import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Bookshelfs from './Bookshelfs'
import Books from './Books' //导入新建的book组件
import Search from './Search'

import './App.css'

class BooksApp extends React.Component {
  state = {
    bookshelfs: []
   
  }
  //从后台爬取数据
  componentDidMount() {
    this.getCurrentShelfList()
  }
  //得到当前列表
  getCurrentShelfList(){
    BooksAPI.getAll().then((bookshelfs) =>{
      this.setState({bookshelfs})//此处原型为this.setState({bookshelfs: bookshelfs})
    })
  }
  //选择书架
  selectedShelf(book,shelf){
    BooksAPI.update(book,shelf).then(() => {
      this.getCurrentShelfList()
    })
  }

  

  render(){
    var that = this
    return (
      <div className="app">
          <Route  path ="/search" component = {() => (
            <Search  chooseShelf= {that.selectedShelf.bind(that)} bookshelfs = {that.state.bookshelfs}/>
            )}
          />
          <Route exact path = "/" render =  {() =>(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">

                {console.log(that.state.bookshelfs)}
                <Bookshelfs bookshelfs = {that.state.bookshelfs} chooseShelf= {that.selectedShelf.bind(that)}/> 
 
              </div>
              <div className="open-search">
                <Link to ="/search" >Add a book</Link>
              </div>
            </div>
          )}
          />
      </div>
    )
  }
}

export default BooksApp
