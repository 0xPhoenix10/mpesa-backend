import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateManyBillingInput } from './order-create-many-billing.input';

@InputType()
export class OrderCreateManyBillingInputEnvelope {

    @Field(() => [OrderCreateManyBillingInput], {nullable:false})
    data!: Array<OrderCreateManyBillingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
