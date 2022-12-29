import React from "react";

function App() {
  return (
    <div>
      <h1>테스트</h1>
      <h1>{process.env.REACT_APP_HOST}</h1>
    </div>
  );
}

export default App;
