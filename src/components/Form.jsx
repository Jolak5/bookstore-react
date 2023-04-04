import { useState } from 'react';
import AddBookButton from './AddBookButton';
import { v4 as uuid } from "uuid";

const INITIAL_FORM_STATE= {
  author:"",
  title:"",
  id:""
} 

export default function Form() {
  const [formState, setFormState] = useState({...INITIAL_FORM_STATE, id: 2})
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormState({
      ...formState,
     id:uuid(),
    });
  };

 const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };


  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="author"
          placeholder="Author..."
          value={formState.author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Book title..."
          value={formState.title}
          onChange={handleChange}
          required
        />
       
        {/* TODO fix hack */}
        
       
        <AddBookButton book={formState} />
      
      </form>
    </div>

  );
}
