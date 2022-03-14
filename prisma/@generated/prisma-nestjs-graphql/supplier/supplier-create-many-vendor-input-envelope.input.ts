import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupplierCreateManyVendorInput } from './supplier-create-many-vendor.input';

@InputType()
export class SupplierCreateManyVendorInputEnvelope {

    @Field(() => [SupplierCreateManyVendorInput], {nullable:false})
    data!: Array<SupplierCreateManyVendorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
