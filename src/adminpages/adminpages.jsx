// src/App.js
import React from 'react';
import Sidebar from '../components/sidebar';

function Adminpage() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <section>
        <h1>Admin Page</h1>
      </section>
    </div>
  );
}

export default Adminpage;
