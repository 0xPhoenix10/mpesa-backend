import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateManyShippingInput } from './order-create-many-shipping.input';

@InputType()
export class OrderCreateManyShippingInputEnvelope {

    @Field(() => [OrderCreateManyShippingInput], {nullable:false})
    data!: Array<OrderCreateManyShippingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
