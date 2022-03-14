import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SupplierSupplierIdVendorIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    supplierId!: string;

    @Field(() => String, {nullable:false})
    vendorId!: string;
}
