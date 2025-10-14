// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type Customer from '../../models/Customer'

// Define a service using a base URL and expected endpoints
export const customerApi = createApi({
  reducerPath: 'customerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1234/' }),
  endpoints: (build) => ({
    customers: build.query<Customer[], void>({
      query: () => `customers`,
    }),
    customer: build.query<Customer, number>({
      query: (no) => `customers/${no}`,
    }),
    newCustomer: build.mutation<void, Partial<Customer>>({
        query: (customer) => ({
        url: `customers`,
        method: 'POST',
        body: customer,
      }),
    })
  }),
})


export const { useCustomerQuery, useCustomersQuery, useNewCustomerMutation } = customerApi