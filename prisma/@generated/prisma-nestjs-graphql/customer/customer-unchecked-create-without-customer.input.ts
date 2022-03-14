import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CustomerUncheckedCreateWithoutCustomerInput {

    @Field(() => String, {nullable:false})
    vendorId!: string;
}
