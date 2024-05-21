import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InvoiceLibrary() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Fetch invoices from the backend
    axios.get('/api/invoices')
      .then(response => {
        setInvoices(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the invoices!', error);
      });
  }, []);

  return (
    <div>
      <h2>Invoice Library Component</h2>
      {/* Render list of invoices */}
    </div>
  );
}

export default InvoiceLibrary;
