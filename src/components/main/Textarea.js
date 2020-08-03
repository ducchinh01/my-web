import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const TextareaPage = () => {
    return (
       <div>
             <div className="input-group">
               <div className="input-group-prepend">
                 <span className="input-group-text" id="basic-addon ">
                 </span>
               </div>
               <textarea className="form-control" rows="6" placeholder="Để lại bình luận của bạn..."></textarea>
            </div>
            <br></br>
             <button className="btn btn-block btn-primary">Gửi</button>
      </div>    
    )
}

export default TextareaPage;