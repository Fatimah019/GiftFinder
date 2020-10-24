import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            showNavMobile: false,
            showNavDesktop: true
        }
    }

    NavBarShow = ()=>{
        this.setState({
            showNavDesktop:false,
            showNavMobile: true
        })
    }

    render(){
        const style = {
            display: 'none'
        }

        return(
            <div className="header flex justify-content-center margin-auto align-center">
                <div className="container flex space-around">
                    <div className="flex-basis">
                        <Link to="/">Logo</Link>
                    </div>
                    {
                        !this.state.showNavDesktop?
                            <HeaderDesktop style={{style}}/>
                        :
                        (   
                            <div className="flex-basis text-right">
                                <i className="fa fa-bars" onClick={()=>this.state.showNavMobile}></i>
                            </div>
                        )
                    
                    
                    }
                </div>
            </div>
        )
    }
}

function HeaderDesktop(){
    return(
        <div>
            <div className="flex-basis text-center flex space-between">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/blogs">Blog</Link>
            </div>
            <div className="flex-basis text-right">
                <Link to="/" className="gift-finder-link-header">Gift Finder</Link>
            </div>
        </div>
    )
}
export default Header