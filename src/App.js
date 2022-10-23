import './App.css';
import { useReducer } from 'react';
import {postReducer, INIT_STATE} from './postReducer'
import { ACTION_TYPES } from './actionTypes';

function App() {
  
  const [state, dispatch] = useReducer(postReducer, INIT_STATE)
  
  const handleFetch = () => {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: ACTION_TYPES.FETCH_SUCCESS,
          payload: data,
        });
      })
      .catch(err => {
        dispatch({type: ACTION_TYPES.FETCH_ERROR});
      })
  }

  return (
    <div>
      <button onClick={handleFetch}>
        {state.loading? "Wait..." : "Fetch the post"}
      </button>
      <p>{state.post?.title}</p>
      <span>{state.error && "Something went wrong!"}</span>
    </div>
  );
}

export default App;
