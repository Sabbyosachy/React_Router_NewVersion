import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PeopleDetails = () => {
  const { aboutID } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${aboutID}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      <h3>{user.name}</h3>
    </div>
  );
};

export default PeopleDetails;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDt3Yn8mtJwqVMkr2MXO86qyG8gexbokAs",
//   authDomain: "newone-4bfa9.firebaseapp.com",
//   projectId: "newone-4bfa9",
//   storageBucket: "newone-4bfa9.appspot.com",
//   messagingSenderId: "432469310913",
//   appId: "1:432469310913:web:f133d11d11909c85620340",
//   measurementId: "G-RC3ZW7N5QZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
