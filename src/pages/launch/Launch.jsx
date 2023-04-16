import axios from "axios";
import {useState,useEffect} from "react"
import "./Launch.css"
import Card from "../../components/card/Card";


const upcomingUrl = "/api/launch/upcoming"; 

function Launch() {    
    const [upcomingLaunches,setUpcomingLaunches] = useState([]);
    
    const getUpcomingLaunches = async () => {
        try {
            let res = await axios.get(upcomingUrl);
            setUpcomingLaunches(res.data.results);  
            console.log(upcomingLaunches);
        } catch (error) {
            console.log("error")   
        }   
    };        

    /*
    const interval = 5000; 

    setInterval(() => {
        getUpcomingLaunches();
    }, interval);*/

    return <div className="LaunchListCont">
                <div className="headerBx">                
                    <div className="header">
                        <span className="up">U</span><span>pcoming rocket launches</span> 
                        <div className="RefreshButton" onClick = {() => getUpcomingLaunches()}>
                            Refresh
                        </div>
                    </div>                
                </div>       
                <div className="cardContainer">         
                    {upcomingLaunches.length === 0 ? <div></div> : 
                    upcomingLaunches.map((launch) => {
                        return  <Card 
                            id={launch.id}
                            name={launch.name}
                            description={launch.mission.description}
                        />
                })}
                </div>
            </div>

}

export default Launch ;