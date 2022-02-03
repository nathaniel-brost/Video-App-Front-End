import RegisterComment from "../customHooks/RegisterComment";


function CommentSection() {
    return (
        <div className="input-group mb-3">
        <button className="btn btn-outline-secondary" type="button" id="button-addon1">Post Comment</button>
        <input type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
            <div>
                <RegisterComment/>
            </div>
        </div>
        );
}

export default CommentSection;


