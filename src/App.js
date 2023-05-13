import './App.css';
import Home from './routes/Home'
import Detail from './routes/Detail'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
    return <Router>
        <Routes>
            <Route path='/' element={<Home />}>
            </Route>
            <Route path='/detail' element={<Detail />}>
            </Route>
        </Routes>
    </Router>;
}

export default App;
