import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CustomerUncheckedCreateWithoutVendorInput {

    @Field(() => String, {nullable:false})
    customerId!: string;
}
