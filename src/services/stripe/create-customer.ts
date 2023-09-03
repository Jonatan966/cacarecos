import { Customer } from "@/entities/customer";
import { stripeApi } from "./api";

interface CreateCustomerProps {
  customer: Customer;
}

export async function createCustomer({ customer }: CreateCustomerProps) {
  const { id } = await stripeApi.customers.create({
    name: customer.name,
    metadata: {
      authId: customer.authId,
    },
    email: customer.email,
  });

  return id;
}
