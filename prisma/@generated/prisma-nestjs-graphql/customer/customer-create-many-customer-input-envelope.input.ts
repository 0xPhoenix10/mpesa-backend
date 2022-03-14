import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateManyCustomerInput } from './customer-create-many-customer.input';

@InputType()
export class CustomerCreateManyCustomerInputEnvelope {

    @Field(() => [CustomerCreateManyCustomerInput], {nullable:false})
    data!: Array<CustomerCreateManyCustomerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
