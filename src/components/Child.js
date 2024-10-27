import React from 'react';

function Child(sendData ) {
  const handleClick = () => {
    const message = "Hello from Child!"; // Data to send
    sendData(message); // Call the function from the parent with the message
  };

  return (
    <div>
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  );
}

export default Child;
