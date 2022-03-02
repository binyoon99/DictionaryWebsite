import { Link } from "react-router-dom";

export default function EmptyPage(){
    return (
        <div>
            <h2>Wrong Page</h2>
            <Link to="/">Return to Main Page</Link>
        </div>

    );
}