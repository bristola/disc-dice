const CustomerList = ({ customers }) => {
  return (
    <ol>
        {customers.map(customer => {
            return <li key={customer.id}>{customer.firstName}</li>
        })}
    </ol>
  );
}

export default CustomerList;
