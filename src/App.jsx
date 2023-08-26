import { Route, Routes } from 'react-router'
import './App.css'
import Catalog from './components/Catalog';
import UserCard from './components/UserCard';
import CreationPage from './components/CreationPage';
import Page404 from './components/Page404';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Catalog />} />
        <Route path='/post/*' element={<UserCard />} />
        <Route path='/post/new' element={<CreationPage />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App
