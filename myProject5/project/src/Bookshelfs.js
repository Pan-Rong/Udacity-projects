import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import Books from './Books' //导入新建的book组件

class Bookshelfs extends Component{

    render(){
        const { bookshelfs,chooseShelf } = this.props
        var currentRB = [];  //存储正在读的书
        var wantTRB = [];   //存储想要读的书
        var readB = [];    //存储已经读完的书
        bookshelfs.map((bookshelf)=>{
            if(bookshelf.shelf === "currentlyReading"){
                currentRB.push(bookshelf);
            }else if(bookshelf.shelf === "wantToRead") {
                wantTRB.push(bookshelf);;
            }else if(bookshelf.shelf === "read" ) {
                readB.push(bookshelf);
            }         
        })
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div className="bookshelf" >
                            <h2 className="bookshelf-title">Current Reading</h2>
                            <div className="bookshelf-books">
                                <Books shelf={currentRB} selectedShelf={chooseShelf}/> 
                            </div>
                        </div>
                        <div className="bookshelf" >
                            <h2 className="bookshelf-title">Want To Read</h2>
                            <div className="bookshelf-books">
                                <Books shelf={wantTRB} selectedShelf={chooseShelf}/>  
                            </div>
                        </div>
                        <div className="bookshelf" >
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <Books shelf={readB} selectedShelf={chooseShelf}/> 
                            </div>
                        </div> 
                    </div>
                    <div className="open-search">
                        <Link to ="/search" >Add a book</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bookshelfs 