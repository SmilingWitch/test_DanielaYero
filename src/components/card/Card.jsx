import { useNavigate } from "react-router-dom";
import "./Card.css"

function Card({id,name,description}) { 
    const navigate = useNavigate()     
    
    const handleClick  = () => {
        navigate(`/launchDetails/${id}`,{state : {id: id} })        
    }

    return (
        <div className="CardBx">
            <div className="Card">
                <div className="name">
                   <h1> {name} </h1> 
                </div>
                <div className="body">
                    {description}
                </div>
                <div className="button" onClick = {handleClick}>
                    Details
                </div>
            </div>   
        </div>
    );
}

export default Card ;