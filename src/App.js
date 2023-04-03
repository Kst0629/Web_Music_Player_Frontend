import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { AdminLogin, Adminpage, Home, Player, UserLogin, Userpage } from './components'

const App = () => {
  return (
    //route to each sub page
    <div className='w-screen h-screen bg-primary flex justify-center items-center'>
        <Routes>
            <Route path='/adminLogin' element={<AdminLogin/>}/>
            <Route path='/Adminpage' element={<Adminpage/>}/>
            <Route path='/userLogin' element={<UserLogin/>}/>
            <Route path='/Userpage' element={<Userpage/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/Player' element={<Player/>}/>
            
            {/** if no any url input, it will route to home page */}
            <Route path='/*' element={<Home />}/>
        </Routes>
    </div>
  )
}

export default App