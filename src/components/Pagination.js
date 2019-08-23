import React from "react";

class Pagination extends React.Component {
  render() {
    return (
      <div>
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled" />
            <button className="btn" style={{backgroundColor: "purple", color:"white"}}>Previous</button>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item ">
              <a className="page-link" href="#">
                2 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="page-item">
              <button
                className="btn "
                style={{ backgroundColor: "purple", color: "white" }}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
