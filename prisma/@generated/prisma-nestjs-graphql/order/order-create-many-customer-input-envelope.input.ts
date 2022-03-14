import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateManyCustomerInput } from './order-create-many-customer.input';

@InputType()
export class OrderCreateManyCustomerInputEnvelope {

    @Field(() => [OrderCreateManyCustomerInput], {nullable:false})
    data!: Array<OrderCreateManyCustomerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
