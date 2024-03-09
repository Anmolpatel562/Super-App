import React from 'react';
import { Link } from 'react-router-dom';

function Browser() {
  return (
    <div>
      <h2>Hello i am Browser</h2>
      <Link to="/">Back to home</Link>
    </div>
  )
}

export default Browser
