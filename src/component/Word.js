import { useState } from "react"

export default function Word ({ word: w }){
    const [word,setWord]= useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);

    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleDone(){
       // setIsDone(!isDone);
       fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then(res => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
    }


    function del() {
        if (window.confirm("Do you wish to delete?")) {
          fetch(`http://localhost:3001/words/${word.id}`, {
            method: "DELETE",
          }).then(res => {
            if (res.ok) {
                    
              setWord({
                ...word,
                id: 0,
              });
            }
          });
        }
      }
      if (word.id === 0){
        return null;
    }
    
    return(
         <tr className={isDone? 'off':""}>
                <td>
                    <input type="checkbox" checked = {isDone} onChange = {toggleDone}></input>
                    </td>
                <td>{word.kor}</td>
                <td>{isShow && word.eng}</td>
                <td>
                    <button onClick = {toggleShow}>
                        {isShow? 'Hide' : 'Show'} Definition
                    </button>
                    <button className ="btn_del" onClick={del}>Delete</button>
                </td>
        </tr>

    );
}
// Create - POST
// Read - GET
// Update - PUT
// Delete - DELETE