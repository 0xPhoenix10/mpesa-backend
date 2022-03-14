import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CustomerCreateManyCustomerInput {

    @Field(() => String, {nullable:false})
    vendorId!: string;
}
