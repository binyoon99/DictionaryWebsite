import { useState } from "react";
export default function DoneWords({ word }){
    function restore(){
        console.log("restore");
    }
    const [isDone, setIsDone] = useState(word.isDone);
    return(
        
        <tr className={!isDone? 'off':""}>
                <td>
                    
                </td>
                <td>{word.kor}</td>
                <td>{ word.eng}</td>
                <td>
                   
                    <button className ="btn_del" onClick={restore}>Restore?</button>
                </td>
        </tr>
    );
}