import React from 'react';
import Form from './Form';
import logo from '../assets/logo gg.png'

const Header = () =>{
    return(
        <div>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <a className="col-md-2 " href="/"><img className="navbar-brand"src={logo} alt="logo"></img></a>
                    <div className="col">
                        <Form className="col-md-8"/> 
                        </div>
                </div>
                <div className="row d-flex justify-content-center pt-0">
                    <nav className="navbar navbar-expand pt-0">
                        <ul className="navbar-nav ml-auto pt-0 col">
                            <li className="nav-item active mx-3">
                                <a href='#' className="nav-link" >Home</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a href='#' className="nav-link" >Top</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a href='#' className="nav-link" >News</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a href='#' className="nav-link" >Log</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>

        </div>    
)
}

export default Header