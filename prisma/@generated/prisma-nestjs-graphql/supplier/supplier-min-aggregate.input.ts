import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SupplierMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    supplierId?: true;

    @Field(() => Boolean, {nullable:true})
    vendorId?: true;
}
