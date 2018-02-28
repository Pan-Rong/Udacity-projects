import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './App.css'

class Books extends Component {
    //选择书架函数
    selectedShelf(choice) {
        
            }
    
    render() {
        return (
            <ol className="books-grid">
            {
                this.props.shelf.map((book) => (//显示每本书的信息  //
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url("+book.imageLinks.thumbnail+")"}}></div>
                                <div className="book-shelf-changer">
                                    <select defaultValue= {book.shelf} onClick={(event) => this.selectedShelf(event.target.options[event.target.selectedIndex].value)}>
                                        <option value="none" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors.map((author) => (<p key={author}>{author}</p>) )}</div> 
                        </div>
                    </li>
                ))
            }

           </ol>
        )
    }
}

export default Books