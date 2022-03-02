import {Link} from "react-router-dom";
import useFetch from "../hook/useFetch";
export default function DayList(){
    
    const days = useFetch("http://localhost:3001/days");
        //console.log(dummy)
    return <ul className="list_day">
        {days.map(day =>(
            <li key ={day.id}>
                <Link to = {`/day/${day.day}`}>Day {day.day}</Link>
                
            </li>
        ))}      
    </ul>;
}