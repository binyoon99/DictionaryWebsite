
import Word from "./Word";
import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
export default function Day(){
    //dumy.words

    const {day} = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`);
   
   /* useEffect(()=>{
        fetch(`http://localhost:3001/words?day=${day}`)
        .then(res =>{
            return res.json();
        })
        .then(data =>{
            setWords(data);
        })
    },[day]); 
*/

    return <>
    <h2>Day {day}</h2>
    <table>
        <tbody>
            {words.map(word =>(
                <Word word = {word} key = {word.id}></Word>
            ))}
           
        </tbody>
    </table>
    </>;

}