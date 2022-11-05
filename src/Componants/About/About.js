import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Products from "../Products/Products";

const About = () => {
  const [people, setPeople] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);

  return (
    <div>
      <h2>Welcome to About</h2>
      <h6>See All The People Information</h6>
      <Row xs={1} md={3} className="g-4">
        {people?.map((users) => (
          <Products key={users.id} users={users}></Products>
        ))}
      </Row>
    </div>
  );
};

export default About;
