import React from "react";
import axios from "axios";

const Mybooks = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`http://localhost:8000/my-books`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("err");
      });
  }, []);

  return (
    <div>
      <table className="customers">
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Description</th>
          <th>Added Date</th>
          <th>Category</th>
          <th>Price</th>
        </tr>

        {data?.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.content}</td>
              <td>{item.date}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Mybooks;
