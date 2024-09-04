import { useNavigate } from "react-router-dom";
export default function Appbar(){
    const navigation = useNavigate();
    return <div>
         <div>
        <button onClick={()=>{
         navigation("/dashboard")
        }}>Dashboard</button>

        <button onClick={()=>{
          navigation("/landingPage")
        }}>LandingPage</button> 
    </div>
    </div>

}