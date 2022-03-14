import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupplierSupplierIdVendorIdCompoundUniqueInput } from './supplier-supplier-id-vendor-id-compound-unique.input';

@InputType()
export class SupplierWhereUniqueInput {

    @Field(() => SupplierSupplierIdVendorIdCompoundUniqueInput, {nullable:true})
    supplierId_vendorId?: SupplierSupplierIdVendorIdCompoundUniqueInput;
}
