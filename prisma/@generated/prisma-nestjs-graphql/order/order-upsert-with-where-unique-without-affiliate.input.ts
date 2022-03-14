import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderWhereUniqueInput } from './order-where-unique.input';
import { OrderUpdateWithoutAffiliateInput } from './order-update-without-affiliate.input';
import { OrderCreateWithoutAffiliateInput } from './order-create-without-affiliate.input';

@InputType()
export class OrderUpsertWithWhereUniqueWithoutAffiliateInput {

    @Field(() => OrderWhereUniqueInput, {nullable:false})
    where!: OrderWhereUniqueInput;

    @Field(() => OrderUpdateWithoutAffiliateInput, {nullable:false})
    update!: OrderUpdateWithoutAffiliateInput;

    @Field(() => OrderCreateWithoutAffiliateInput, {nullable:false})
    create!: OrderCreateWithoutAffiliateInput;
}
