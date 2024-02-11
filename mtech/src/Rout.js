import React from 'react'
import { Route, Routes } from 'react-router-dom/dist'
import Employee from './Pages/Ilham/Employee'
import Empreg from './Pages/Ilham/Emreg'
// import { Link } from 'react-router-dom'

function Rout() {
    //const {id} usePerams()//then we can use link of rest as given
    //to use the path also spesified as path='/books/:id' this id as referance
    //Link ullukku oondiyata kudukkalam
    //to give not found as page we can say
    //<route path='*' element={<Kol/>}>
    //<route path='/first'>
        //ippadi perant madiri pootta
        //engalukku ide page wenumunda<Route Index element={<First/>}/>kudukkelum ;matta page ukku 
        //engalukku <Route path='/maame' element={<Lol/>}>
    //</route>
    //link a wera pagela kudututtu ad <Outlet contaxt{{hello:'World'}}/> kuduta <Link>kaka<Link/> link ullukeeradum print aawum 
    //as kaka+world um print aawum
    //to get that {obj.hello} kudutta wandudum
  return (
    <>
    {/* <Link to='/'></Link> */}
        <Routes>
            <Route path='/' element={<Employee/>}/>
            <Route path='/employeeregister' element={<Empreg/>} />
        </Routes>
    </>
  )
}

export default Rout