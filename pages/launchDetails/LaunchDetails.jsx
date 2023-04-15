import axios from "axios";
import {useState, useEffect} from "react"
import "./LaunchDetails.css"
import { useNavigate,useLocation} from "react-router-dom";

const detailsUrl = "/api/launch";  

function LaunchDetails() {

    const navigate = useNavigate() 
    const {state} = useLocation()
    const {id} = state
    
    const handleClick  = () => {
        navigate("/")
    }


    const [details,setDetails] = useState({
        name: "",
        mission : {
            name: "",
            description: "",
            type: "",
            orbit: "",
        }
    });

    const getDetails = async () => {
        try {
            let res = await axios.get(`${detailsUrl}/${id}`);
            setDetails(res.data);  
        } catch (error) {
            console.log("error") 
        }
        
    };

    useEffect(() => {          
        console.log(id)
        getDetails()
    }, [])
    
    
    return <div className="Content">        
        <div className="launchDetail">

            <div className="rocket">
                <span>{details.name}</span>
                <div className="buttonCont">
                    <div className="button" onClick = {handleClick}> Go Back</div>
                </div>
            </div>

            <div className="list">
                <ul>
                    <li> Mission name: {details.mission.name}</li>
                    <li> Mission description: {details.mission.description}</li>
                    <li> Mission type: {details.mission.type}</li>
                    <li> Mission orbit: {details.mission.orbit}</li>
                </ul>
            </div>

        </div>
    </div>
}

export default LaunchDetails ;