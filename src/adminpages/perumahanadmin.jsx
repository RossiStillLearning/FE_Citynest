// src/App.js
import React from 'react';
import Sidebar from '../components/sidebar';

function PerumahanAdmin() {
  return (
    <div className="App d-flex">
      <Sidebar />
      <section>
        <h1>Data Perumahan</h1>
      </section>
    </div>
  );
}

export default PerumahanAdmin;
