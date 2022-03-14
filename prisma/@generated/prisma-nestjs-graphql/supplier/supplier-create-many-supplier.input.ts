import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SupplierCreateManySupplierInput {

    @Field(() => String, {nullable:false})
    vendorId!: string;
}
