import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Parent() {
  const [childData, setChildData] = useState(""); // start with empty string for input

  const handleDataFromChild = (data) => {
    setChildData(data); // fixed setter
  };

  return (
    <div>
        <Header name="Parent to Child" />
      <h1>Parent, hell yeah!</h1>
      <div>
        <span>
          <p>data from child: {childData}</p>
        </span>
      </div>
      <Child sendDataToParent={handleDataFromChild} />
      <Footer />
    </div>
  );
}

function Child({ sendDataToParent }) {
  return (
    <input
      onChange={(e) => {
        sendDataToParent(e.target.value);
      }}
    />
  );
}
