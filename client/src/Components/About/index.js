import React, {useState} from 'react'
import './about.css'
// import Blog from '../Blog'

class About extends React.Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div className="about">
                <TopAbout/>
                <AboutSecondLayer/>
                {/* <BlogLayer/> */}
            </div>
        )
    }
}

function TopAbout(){
    return(
        <div className="about-top flex">
            <div className="top-left justify-content-center align-center margin-auto flex-basis">
                <h2>Great service, Professional support</h2>
                <p>CoinBase is a platform for trading your bitcoin and giftcard at the best rate, why not give us a trial.</p>
            </div>
            <div className="about-top-right flex-basis  flex justify-content-center align-center margin-auto">
                <img src={require('./img/img6.jpg')} alt="img"/>
            </div>
        </div>
    )
}

function AboutSecondLayer(){
    return(
        <div className="container-2">
            <div className="text-center">
                <p>“Morbi sagittis ultricies ex, a tempus lorem suscipit non. Donec semper leo ut lobortis condimentum. Orci varius natoque penatibus et magnis”</p>
            </div>
        </div>
    )
}

// function BlogLayer(){
//     const [query, setQuery] = useState('')
//     const [pageNumber, setPageNumber] = useState(1)

//     function handleLoad(e){
//         setQuery(e.target.value)
//         setPageNumber(1)
//     }
//     const {
//         loading,
//         users,
//         hasMore,
//         error
//     }=Blog(query, pageNumber)
//     return(
//         <>
//             <input type="text" onChange={handleLoad}/>
//             {/* <h3>{handleLoad}</h3>{handleLoad} */}
//             {users.map(user=>{
//                 return <div key={user}>{user}</div>
//             })}
//             <div>{loading && 'loading...'}</div>
//             <div>{error && 'error...'}</div>
//         </>
//     )
// }
export default About