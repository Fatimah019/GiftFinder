import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'
import '../../App.css'

class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <TopHome/>
                <HowWeWork/>
                <Occassion/>
                <GetStarted/>
                <Blog/>
            </div>
        )
    }
}

function TopHome(){
    return(
        <div className="top-home flex">
                <div className="top-left justify-content-center align-center margin-auto flex-basis">
                    <h2>Find a gift for your wife or girlfriend</h2>
                    <p>Struggling to find a gift for your wife or girlfriend? No problem!</p>
                    <Link to="/find-gift" className="find-gift-top-link">Find gift now</Link>
                </div>
                <div className="top-right flex-basis">
                </div>
        </div>
    )
}

function HowWeWork(){
    return(
        <div className="top-home-2 flex-row">
                <div className="top-left-2 flex-basis">
                </div>
                <div className="top-right-2 justify-content-center align-center margin-auto flex-basis">
                    <h2>How we work</h2>
                    <p>We’ve actually already asked hundreds of women what they want, and made a database with the results. All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.</p>
                    <Link to="/find-gift" className="learn-more-link">Learn More</Link>
                </div>
        </div>
    )
}

function Occassion(){
    return(
        <div>
            <div className="text-center">
                <h3>Gifts for all Occasions</h3>
                <p>“Try our web app to find the best gifts for all occasions”</p>
            </div>
            <div className="occ-gift-imgs flex flex-wrap container margin-auto justify-content-center align-center">
                <div>
                    <img src={require('./img/img3.jpg')} alt="img"/>
                    <div>
                        <p>Birthday</p>
                        <Link to="/">See More <i class="fa fa-angle-right"></i></Link>
                    </div>
                </div>
                <div>
                    <img src={require('./img/img4.jpg')} alt="img"/>
                    <div>
                        <p>Anniversary</p>
                        <Link to="/">See More <i class="fa fa-angle-right"></i></Link>
                    </div>
                </div>
                <div>
                    <img src={require('./img/img5.jpg')} alt="img"/>
                    <div>
                        <p>Valentine's Day</p>
                        <Link to="/">See More <i class="fa fa-angle-right"></i></Link>
                    </div>
                </div>
                <div>
                    <img src={require('./img/img6.jpg')} alt="img"/>
                    <div>
                        <p>Christmas</p>
                        <Link to="/">See More <i class="fa fa-angle-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

function GetStarted(){
    return(
        <div className="get-started-con flex-row">
            <div className="get-started-con-left flex-basis margin-auto flex-col justify-content-center align-center">
                <div>
                    <p style={{fontWeight: 'bolder'}}>Ready to get started?</p>
                    <Link to="/" className="signup-link">Sign up</Link> or <Link to="/" className="contact-link">contact us</Link>
                </div>
            </div>
            <div className="get-started-con-right flex-basis flex margin-auto justify-content-center align-center">
                <Link to="/" class="find-gift-link-2">Find gift now</Link>
                <Link to="/" class="how-it-works-link">How it works</Link>
            </div>
        </div>
    )
}

function Blog(){
    return(
        <div>
            <div className="text-center">
                <h4>Our Best Blogs Ever</h4>
                <p>“Try our blog to find the best tips and tricks to select your gift”</p>
            </div>
            
            <div class="container flex blog-img-con">
                <div className="blog-img blog-img-con-left"></div>
                <div className="blog-img-con-right margin-auto justify-content-center align-center">
                    <p>Mr. John Doe</p>
                    <h4>The best way to wish your wife</h4>
                    <Link to="/" className="read-more-link">Read More</Link>
                </div>
            </div>

            <div className="blog-text-con container flex-row justify-content-center margin-auto align-center">
                <div class="flex-basis justify-content-center margin-auto align-center">
                    <h4>Database to find the gifts for your girlfriend</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                    <Link className="read-more-link">Read More</Link>
                </div>
                <div className="flex-basis justify-content-center margin-auto align-center">
                    <h4>How Artificial Intelligence read your mind to find the best gift</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                    <Link className="read-more-link">Read More</Link>
                </div>
            </div>
        </div>
    )
}
export default Home