import {Link} from "react-router-dom";
export default function Header(){
    return <div className = "header">
        <h1>
            <Link to ="/">Advanced Korean Vocabulary</Link>
        </h1>
        <div className="menu">
            <Link to ="/create_word" className="link">Add Words</Link>
            <a href="#x" className="link">Add Days</a>
        </div>
    </div>
}