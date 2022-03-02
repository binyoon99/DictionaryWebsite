import { useState} from "react";
import useFetch from "../hook/useFetch"; 
import DoneWords from "./DoneWords";
export default function CheckDone( ){
    const words = useFetch(`http://localhost:3002/words`);
    

    console.log(words.isDone);
    return(
        <>
        <h2>Memorized Words</h2>
            <table>
                <tbody>
                    {words.map(word =>(
                        <DoneWords word = {word} key = {word.id}></DoneWords>
                    ))}
                
                </tbody>
            </table>
        </>
    );

}