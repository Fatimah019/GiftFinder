import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <Top/>
                <div className="container-2" style={{marginTop: 40}}>
                    <hr/>
                </div>
                <Links/>
                <CopyRight/>
            </div>
        )
    }
}

function Top(){
    return(
        <div className="flex container-2 footer-top">
            <div className="flex-basis text-center space-around flex flex-row">
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
            </div>
            <div className="flex-basis text-center justify-content-center margin-auto align-center">
                <Link to="/">Logo</Link>
            </div>
            <div className="flex-basis text-center space-around flex flex-row">
                <Link to="/">Service</Link>
                <Link to="/">Blog</Link>
            </div>
        </div>
    )
}

function Links(){
    return(
        <div className="social-links-con flex flex-wrap text-center justify-content-center margin-auto align-center space-evenly" style={{width:200}}>
            <Link to="/"><i className="fa fa-facebook social-link"></i></Link>
            <Link to="/"><i className="fa fa-twitter social-link"></i></Link>
            <Link to="/"><i className="fa fa-instagram social-link"></i></Link>
            <Link to="/"><i className="fa fa-youtube social-link"></i></Link>
            <Link to="/"><i className="fa fa-github social-link"></i></Link>
        </div>
    )
}

function CopyRight(){
    return(
        <div className="text-center">
            <p>© 2010 — 2020 Privacy — Terms</p>
        </div>
    )
}
export default Footer