import { useState } from "react";

export default function DoneWords({ word: w }) {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    const [isMemorized, setIsMemorized] = useState(word.isMemorized);
    const [isLoading, setIsLoading] = useState(false);
    function restore() {
        if (!isLoading) {
            setIsLoading(true);
            fetch(`http://localhost:3001/words`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    day: word.day,
                    eng: word.eng,
                    kor: word.kor,
                    id: word.id,
                    isDone: false,
                    isMemorized: false

                })
            }).then(res => {
                if (res.ok) {
                    //history.push(`/day/${dayRef.current.value}`)
                    setIsLoading(false);
                }
            });
            del(word);
        }
    }
    function del() {
        if (window.confirm("Do you wish to delete?")) {
            fetch(`http://localhost:3002/words/${word.id}`, {
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
    if (word.id === 0) {
        return null;

    }
    return (

        <tr className={isMemorized ? 'off' : ""}>
            <td>

            </td>
            <td>{word.kor}</td>
            <td>{word.eng}</td>
            <td>
                <button className="btn_del" onClick={restore}>Restore?</button>
            </td>
        </tr>
    );
}