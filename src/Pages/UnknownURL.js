import "./CSS-files/Unknown-css/Unknown.css";
import { useNavigate } from 'react-router-dom';
import photo from "./CSS-files/Unknown-css/code-error.png";
import { Title } from "./Title";


export const UnknownURL = () => {
    Title("SPOTIN | PAGE NOT FOUND");

    const navigate = useNavigate();

    function goto() {
        navigate(-1);

    }
    return (
        <>
                <img id="unknowimg" src={photo} alt=""/>
                <div id="unknownp">Page not found</div>
                <div id="unknownp2">The page you’re looking for doesn’t exist</div>
                <button class="learn-more" id="unknowbut" onClick={goto} >
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Go to previous page</span>
                </button>
        </>
    )
}