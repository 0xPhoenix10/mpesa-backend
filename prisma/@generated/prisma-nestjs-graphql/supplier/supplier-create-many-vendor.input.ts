import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SupplierCreateManyVendorInput {

    @Field(() => String, {nullable:false})
    supplierId!: string;
}
