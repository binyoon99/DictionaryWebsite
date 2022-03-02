import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
//import { useHistory } from "react-router";
import useFetch from "../hook/useFetch";
//import { IDay } from "./DayList";

export default function CreateWord(){
    const days = useFetch("http://localhost:3001/days");
    const history = useHistory ();
    
    function onSubmit(e){
        e.preventDefault();
        /*
        console.log(krRef.current.value);
        console.log(engRef.current.value);
        console.log(dayRef.current.value);*/
        fetch(`http://localhost:3001/words/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day : dayRef.current.value,
        eng : engRef.current.value,
        kor : krRef.current.value,
        isDone: false
      }),
    }).then(res => {
      if (res.ok) {
        alert("The word has been created");
        history.push(`/day/${dayRef.current.value}`)
      }
    });
    }
    const krRef = useRef(null);
    const engRef = useRef(null);
    const dayRef = useRef(null);
    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Korean</label>
                <input type="type" placeholder="컴퓨터" ref={krRef}/>
            </div>
            <div className="input_area">
                <label>English</label>
                <input type="type" placeholder="computer" ref = {engRef}/>
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day =>(
                        <option key={day.id} value ={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button>Save</button>
        </form>
    );

}