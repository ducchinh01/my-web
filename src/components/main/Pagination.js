import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TextareaPage from './Textarea'

const Pagination = (props) => {
  return (
    <div>
  <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item disabled">
      <a className="page-link" href="#">Previous</a>
    </li>
    <li className="page-item"><a className="page-link" href="#">1</a></li>
    <li className="page-item"><a className="page-link" href="#">2</a></li>
    <li className="page-item"><a className="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
<br></br>
< TextareaPage/>
    </div>
  );
};

export default Pagination;