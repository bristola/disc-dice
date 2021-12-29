import { useEffect, useState } from 'react';
import CustomerList from './customer-list/customer-list';
import CustomerForm from './customer-form/customer-form';
import { getCustomers } from './customer.service';

const Customer = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        getCustomers().subscribe((customers) => {
            setCustomers(customers);
        });
    }, []);

    const addCustomer = (newCustomer) => {
        newCustomer.id = customers.length + 1;
        setCustomers([...customers, newCustomer]);
    }

    return (
      <div>
          <CustomerForm onSubmit={addCustomer}></CustomerForm>
          <CustomerList customers={customers}></CustomerList>
      </div>
    );
  }
  
  export default Customer;
  