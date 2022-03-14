import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateManyAffiliateInput } from './order-create-many-affiliate.input';

@InputType()
export class OrderCreateManyAffiliateInputEnvelope {

    @Field(() => [OrderCreateManyAffiliateInput], {nullable:false})
    data!: Array<OrderCreateManyAffiliateInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
