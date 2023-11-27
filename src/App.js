import React, { useState, useEffect } from 'react';
import data from './data.json'; // Adjust the path based on your folder structure

function App() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    // Use the imported 'data' directly
    setJsonData(data);
  }, []);

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {jsonData.map((item, index) => (
          <li key={index}>
            {item.name} - {item.number} - {item.specialID}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
