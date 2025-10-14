import React from 'react'
import { useCustomersQuery, useNewCustomerMutation } from '../../redux/api/customersApi'

function CustomerForm() {
    let [createCustomer] = useNewCustomerMutation();
    let {refetch} = useCustomersQuery();
     const addCustomer = async() => {
        try {
        await createCustomer({name : "Roger"});
        refetch();
        } catch(error) {
            console.log(error)
        }
    }
    return <button onClick={() => addCustomer()}>Add Customer</button>
} 

export default function CustomerList() {
    let {data:customers, isFetching, isLoading, isSuccess, isError} = useCustomersQuery();
  return (
    <div>
        <h1>CustomerList</h1>
        <CustomerForm />
        {
            isSuccess && (<div>
                    {
                        customers?.map(customer => <div key={customer.id}> {customer.name}</div>)
                    }

                </div>)
        }
    </div>
  )
}
