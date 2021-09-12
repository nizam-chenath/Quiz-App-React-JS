import React from 'react'
import Clients from './Pages/Clients/Clients'
import Contact from './Pages/Contact/Contact'
import Footer from './Pages/Footer/Footer'
import Home from './Pages/Home/Home'
import Projects from './Pages/Projects/Projects'
import Services from './Pages/Services/Services'
import Works from './Pages/Works/Works'

function Pages() {
    return (
        <div className="Pages">
            <Home/>
            <Services/>
            <Works/>
            <Clients/>
            <Projects/>
            <Contact/>
            <Footer/>

        </div>
    )
}

export default Pages
