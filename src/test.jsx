import React, { useState, useEffect } from "react";
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const client = new W3CWebSocket('ws://localhost:8000')

function Test() {
  const [data, setData] = useState([]); 

  useEffect(() => {
    const handleData = (event) => {
      const reqBody = JSON.parse(event.data);
      console.log('Received reqBody:', reqBody);
      setData(prevData => [...prevData, reqBody]); // Update the data state with the received reqBody
    }

    client.addEventListener('message', handleData);

    // Clean up event listener on component unmount
    return () => {
      client.removeEventListener('message', handleData);
    }
  }, []);

  return (
    <div>
      {data.map((dataItem, index) => (
        <div key={index}>
          <p className="text-zinc-200">{dataItem.name}</p> 
        </div>
      ))}
    </div>
  );
}

export default Test;
