import {
    useHistory,
    Link
} from "react-router-dom";
import Article from '../cores/articles';


function InsertArticle() {
    const history = useHistory()
    
    return (
        <>
            <div>
               <Article />
            </div>
        </>
    );
}

export default InsertArticle;