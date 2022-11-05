import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PeopleDetails = () => {
  const [people, setPeople] = useState({});
  let { aboutID } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${aboutID}`)
      .then((res) => res.json())
      .then((data) => setPeople(data));
  }, []);
  return (
    <div>
      <h3>{people.name}</h3>
    </div>
  );
};

export default PeopleDetails;
