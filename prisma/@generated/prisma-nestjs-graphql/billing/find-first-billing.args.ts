import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BillingWhereInput } from './billing-where.input';
import { BillingOrderByWithRelationInput } from './billing-order-by-with-relation.input';
import { BillingWhereUniqueInput } from './billing-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BillingScalarFieldEnum } from './billing-scalar-field.enum';

@ArgsType()
export class FindFirstBillingArgs {

    @Field(() => BillingWhereInput, {nullable:true})
    where?: BillingWhereInput;

    @Field(() => [BillingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BillingOrderByWithRelationInput>;

    @Field(() => BillingWhereUniqueInput, {nullable:true})
    cursor?: BillingWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BillingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BillingScalarFieldEnum>;
}
