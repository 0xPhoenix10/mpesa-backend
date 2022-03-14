import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingWhereInput } from './shipping-where.input';
import { ShippingOrderByWithRelationInput } from './shipping-order-by-with-relation.input';
import { ShippingWhereUniqueInput } from './shipping-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ShippingScalarFieldEnum } from './shipping-scalar-field.enum';

@ArgsType()
export class FindFirstShippingArgs {

    @Field(() => ShippingWhereInput, {nullable:true})
    where?: ShippingWhereInput;

    @Field(() => [ShippingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ShippingOrderByWithRelationInput>;

    @Field(() => ShippingWhereUniqueInput, {nullable:true})
    cursor?: ShippingWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ShippingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ShippingScalarFieldEnum>;
}
