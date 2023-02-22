import './App.css';
import Button from './Button';
import { useState } from 'react'

function App() {
    const [toDo, setToDo] = useState('');
    const [toDos, setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if (toDo === '') {
            return;
        }
        setToDos(currentArray => [toDo, ...toDos])
        setToDo('');
        console.log(toDos);
    };

    return (
        <div className='App'>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type='text'
                    placeholder='Write your To Do'
                />
                <button>Add To Do</button>
            </form>
            <Button text={'Continue'} />
        </div>
    );
}

export default App;
