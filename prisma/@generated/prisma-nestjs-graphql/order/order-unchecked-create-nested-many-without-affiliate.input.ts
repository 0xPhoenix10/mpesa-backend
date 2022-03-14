import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderCreateWithoutAffiliateInput } from './order-create-without-affiliate.input';
import { OrderCreateOrConnectWithoutAffiliateInput } from './order-create-or-connect-without-affiliate.input';
import { OrderCreateManyAffiliateInputEnvelope } from './order-create-many-affiliate-input-envelope.input';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderUncheckedCreateNestedManyWithoutAffiliateInput {

    @Field(() => [OrderCreateWithoutAffiliateInput], {nullable:true})
    create?: Array<OrderCreateWithoutAffiliateInput>;

    @Field(() => [OrderCreateOrConnectWithoutAffiliateInput], {nullable:true})
    connectOrCreate?: Array<OrderCreateOrConnectWithoutAffiliateInput>;

    @Field(() => OrderCreateManyAffiliateInputEnvelope, {nullable:true})
    createMany?: OrderCreateManyAffiliateInputEnvelope;

    @Field(() => [OrderWhereUniqueInput], {nullable:true})
    connect?: Array<OrderWhereUniqueInput>;
}
