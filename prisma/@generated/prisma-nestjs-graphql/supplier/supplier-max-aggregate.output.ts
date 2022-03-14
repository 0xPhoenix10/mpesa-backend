import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SupplierMaxAggregate {

    @Field(() => String, {nullable:true})
    supplierId?: string;

    @Field(() => String, {nullable:true})
    vendorId?: string;
}
