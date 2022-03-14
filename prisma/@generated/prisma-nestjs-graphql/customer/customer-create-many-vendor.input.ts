import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CustomerCreateManyVendorInput {

    @Field(() => String, {nullable:false})
    customerId!: string;
}
