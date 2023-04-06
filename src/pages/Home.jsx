import { useDispatch, useSelector } from 'react-redux';
import Form from '../components/Form';
import './home.css';
import { deleteBook } from '../components/redux/books/booksSlice';

// Import the initialState and display
export default function Home() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);

  return (
    <div className="bookList">
      { (books ?? []).filter((b) => b.item_Id).map((book) => (
        <div className="eachBook" key={book.item_Id} id={book.item_Id}>
          <div className="left-pan">
            <h4>category</h4>
            {' '}
            <h1>{book.author}</h1>
            {' '}
            <p className="booktitle">{book.title}</p>
            {' '}
            <div className="buttonDiv">
              {' '}
              <button type="button">Comments</button>
              <button type="button" onClick={() => dispatch(deleteBook(book.item_Id))}>REMOVE</button>
              <button type="button">Edit</button>
            </div>
          </div>
          <div className="middle-pan">
            <div className="circle" />
            <div>
              <h1 className="percentage">64%</h1>
              <p>Completed</p>
            </div>
          </div>
          <div className="right-pan">
            <p>CURRENT CHAPTER</p>
            <h5>Chapter 17</h5>
            <button type="button" className="updateProgress">UPDATE PROGRESS</button>
          </div>
        </div>

      ))}
      <Form />
    </div>

  );
}
