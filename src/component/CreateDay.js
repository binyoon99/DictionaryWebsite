import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../hook/useFetch"; 
export default function CreatDay(){
    const days = useFetch("http://localhost:3001/days");
    const history = useHistory();

    function addDay(){

        fetch(`http://localhost:3001/days`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day : days.length +1

      }),
    }).then(res => {
      if (res.ok) {
        alert("New day has been added");
        history.push(`/`)
      }
    });

    }
    return(
        <div>
            <h3>Days Complte :{days.length} </h3>
            <button onClick={addDay}> Add day </button>
        </div>
    );

}