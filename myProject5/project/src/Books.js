import React,{Component} from 'react'

class Books extends Component {
    render() {
        return (
            <ol className="books-grid">
            {
                this.props.shelf.map((book) => (//显示每本书的信息  
                    <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: "url("+book.imageLinks.thumbnail+")"}}></div>
                                <div className="book-shelf-changer">
                                    <select defaultValue= {book.shelf||"none"} onChange={(event) => this.props.selectedShelf(book,event.target.value)}>
                                        <option value="none" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div> 
                        </div>
                    </li>
                ))
            }
           </ol>
        )
    }
}
//, backgroundImage: "url("+book.imageLinks.thumbnail+")"
export default Books