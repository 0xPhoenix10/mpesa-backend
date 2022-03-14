import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SupplierCountAggregate {

    @Field(() => Int, {nullable:false})
    supplierId!: number;

    @Field(() => Int, {nullable:false})
    vendorId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
