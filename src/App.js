import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/gamarjoba/data.json') // Adjust the path if the file is in a different directory
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>List of Items</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name} - {item.number} - {item.specialID}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
