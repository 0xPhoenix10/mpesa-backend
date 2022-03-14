import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupplierCreateWithoutVendorInput } from './supplier-create-without-vendor.input';
import { SupplierCreateOrConnectWithoutVendorInput } from './supplier-create-or-connect-without-vendor.input';
import { SupplierCreateManyVendorInputEnvelope } from './supplier-create-many-vendor-input-envelope.input';
import { SupplierWhereUniqueInput } from './supplier-where-unique.input';

@InputType()
export class SupplierUncheckedCreateNestedManyWithoutVendorInput {

    @Field(() => [SupplierCreateWithoutVendorInput], {nullable:true})
    create?: Array<SupplierCreateWithoutVendorInput>;

    @Field(() => [SupplierCreateOrConnectWithoutVendorInput], {nullable:true})
    connectOrCreate?: Array<SupplierCreateOrConnectWithoutVendorInput>;

    @Field(() => SupplierCreateManyVendorInputEnvelope, {nullable:true})
    createMany?: SupplierCreateManyVendorInputEnvelope;

    @Field(() => [SupplierWhereUniqueInput], {nullable:true})
    connect?: Array<SupplierWhereUniqueInput>;
}
