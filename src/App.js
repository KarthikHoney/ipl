import {BrowserRouter, Route} from 'react-router-dom'

import Home from './components/Home'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home} />
  </BrowserRouter>
)

export default App
