import { useContext } from "react"
import { DataContext } from "../App"
import { Link } from "react-router-dom"
import GitHubIcon from '@mui/icons-material/GitHub';


const Profle = () => {
  const contextData = useContext(DataContext)
  return (
      <div className="fle-row md:flex bg-base-600 shadow-xl text-2xl text-white ">
        <figure className=" h-full  items-center justify-center">
          <img className=" rounded md:rounded-l-xl w-full"
            src={contextData.avatar_url}
            alt="profile" />
        </figure>
        <div className="card-body md:w-4/7 m-8 p-4 px-10 items-center">
          <h1 className="card-title p-4 mb-4 bg-black rounded ">{contextData.name}</h1>
          <h2 className=" px-4 py-2 bg-black rounded">Username : {contextData.login}</h2>
          <h2 className=" my-4  px-4 py-2  bg-black rounded">Followers :{contextData.followers}</h2>
          <h2 className=" px-4 py-2  bg-black rounded">Following : {contextData.following}</h2>
          <h2></h2>
          <div className="card-actions justify-end text-black bg-blue-600 rounded p-2 px-4 mt-4">
            <Link to={contextData.html_url}><button className="btn btn-primary">Go to Profile <GitHubIcon/> </button></Link>
            
          </div>
        </div>
      </div>
  )
}

export default Profle