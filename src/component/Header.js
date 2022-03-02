import {Link} from "react-router-dom";
export default function Header(){
    return <div className = "header">
        <h1>
            <Link to ="/">Advanced Korean Vocabulary</Link>
        </h1>
        <div></div>
        <div className="menu">
            <Link to ="/create_word" className="link">Add Words</Link>
            <Link to ="/create_day" className="link">Add Days</Link>
            <Link to ="/check_done" className="link">Finished Words</Link>
        </div>
    </div>
}