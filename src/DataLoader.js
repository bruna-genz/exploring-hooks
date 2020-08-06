import React, { useState, useEffect } from 'react';

const DataLoader = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://quotes-api-bruna.herokuapp.com/quotes')
      .then(response => response.json())
      .then(data => setData(data))
  }, []) // super important array, it constains the dependencies for useEffect, 
         // when it's empty, the effect runs only once

  return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.quote}</li>
        ))}
      </ul>
    </div>
  )
}

export default DataLoader;