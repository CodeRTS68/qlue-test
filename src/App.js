import React from "react";
import axios from "axios";
import Pagination from "./components/Pagination";
// import Chart from "./components/Chart";
class App extends React.Component {
  state = {
    datas: []
  };
  componentDidMount() {
    axios.get(`https://swapi.co/api/people/`).then(res => {
      const datas = res.data;
      console.log(datas);
      this.setState({ datas: datas.results });
    });
  }

  render() {
    return (
      <div className="container">
        <table className="table" >
          <thead style={{backgroundColor: "purple", color:"white"}}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Height</th>
              <th scope="col">Mass</th>
              <th scope="col">Hair color</th>
              <th scope="col">Skin color</th>
            </tr>
          </thead>
          <tbody style={{backgroundColor: "#d9d6ce"}}>
            {this.state.datas.map((data, index) => (
              <tr key={data.name}>
                <th scrop="row">{index + 1}</th>
                <td>{data.name}</td>
                <td>{data.height}</td>
                <td>{data.mass}</td>
                <td>{data.skin_color}</td>
                <td>{data.hair_color}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination/>
      </div>
    );
  }
}

export default App;
