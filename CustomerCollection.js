// src/CustomerCollection.js

import React, { useState } from 'react';

const CustomerCollection = () => {
  const [customerMap, setCustomerMap] = useState(new Map());
  const [customerWeakMap, setCustomerWeakMap] = useState(new WeakMap());
  const [customerId, setCustomerId] = useState('');
  const [customerInfo, setCustomerInfo] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const addCustomer = () => {
    if (customerId && customerInfo) {
      const newCustomerMap = new Map(customerMap);
      newCustomerMap.set(customerId, customerInfo);
      setCustomerMap(newCustomerMap);

      const customerObj = { id: customerId, info: customerInfo };
      customerWeakMap.set(customerObj, additionalInfo);

      // Clear input fields after adding a customer
      setCustomerId('');
      setCustomerInfo('');
      setAdditionalInfo('');
    } else {
      alert('Please enter Customer ID and Customer Info');
    }
  };

  return (
    <div>
      <h2>Customer Collection</h2>

      <label>
        Customer ID:
        <input type="text" value={customerId} onChange={(e) => setCustomerId(e.target.value)} />
      </label>

      <label>
        Customer Info:
        <input type="text" value={customerInfo} onChange={(e) => setCustomerInfo(e.target.value)} />
      </label>

      <label>
        Additional Info:
        <input
          type="text"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
        />
      </label>

      <button onClick={addCustomer}>Add Customer</button>

      <ul>
        {Array.from(customerMap).map(([customerId, customerInfo]) => (
          <li key={customerId}>
            ID: {customerId}, Info: {customerInfo}, Additional Info:{' '}
            {customerWeakMap.get({ id: customerId, info: customerInfo })}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerCollection;
