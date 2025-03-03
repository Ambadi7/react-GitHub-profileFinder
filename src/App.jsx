import axios from "axios"
import { useState,createContext } from "react"
import Profle from "./components/Profle"



export const DataContext = createContext()
function App() {
  const [user,setUser] = useState("")
  const [userName,setUserName] =useState("")
  
  const fetchData = async(userName)=>{
    const {data} = await axios.get(`https://api.github.com/users/${userName}`)
    console.log(data)
    setUser(data)
  }
  
  return (
    <div >
      <div className="mx-auto flex-wrap p-2 md:p-5 min-h-screen  bg-gradient-to-r from-violet-600 to-slate-900">
        <div className="flex gap-4 md:m-3 p-2  justify-center">
          <input className="bg-gray-300 outline-none  md:px-4 p-2 md:p-3 rounded-md w-4/7 md:w-3/7" placeholder="Enter Username" value={userName} onChange={(e)=>{setUserName(e.target.value)}} />
          <button className="bg-gray-300 p-2 md:p-3 rounded-md w-15 font-semibold" onClick={()=>{fetchData(userName)}}>Find</button>
        </div>
        
        <DataContext.Provider value={user}>
          <div className="p-4">
          {user ? <Profle/> : "" }
          </div>
          
        </DataContext.Provider>
        
      </div>
      
    </div>
  )
}

export default App
