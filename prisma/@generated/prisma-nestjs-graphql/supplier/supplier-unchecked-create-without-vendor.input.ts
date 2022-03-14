import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SupplierUncheckedCreateWithoutVendorInput {

    @Field(() => String, {nullable:false})
    supplierId!: string;
}
