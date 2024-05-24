import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Link to="/">
        <h1 style={{ fontSize: '100px', color: 'green' }}>Gaskan News</h1>
      </Link>
      <h3 style={{ fontSize: '50px' }}>Halaman tidak ditemukan (404)</h3>
    </div>
  );
}

export default PageNotFound;
