import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CustomerMaxAggregate {

    @Field(() => String, {nullable:true})
    customerId?: string;

    @Field(() => String, {nullable:true})
    vendorId?: string;
}
