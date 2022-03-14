import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupplierCreateWithoutVendorInput } from './supplier-create-without-vendor.input';
import { SupplierCreateOrConnectWithoutVendorInput } from './supplier-create-or-connect-without-vendor.input';
import { SupplierUpsertWithWhereUniqueWithoutVendorInput } from './supplier-upsert-with-where-unique-without-vendor.input';
import { SupplierCreateManyVendorInputEnvelope } from './supplier-create-many-vendor-input-envelope.input';
import { SupplierWhereUniqueInput } from './supplier-where-unique.input';
import { SupplierUpdateWithWhereUniqueWithoutVendorInput } from './supplier-update-with-where-unique-without-vendor.input';
import { SupplierUpdateManyWithWhereWithoutVendorInput } from './supplier-update-many-with-where-without-vendor.input';
import { SupplierScalarWhereInput } from './supplier-scalar-where.input';

@InputType()
export class SupplierUpdateManyWithoutVendorInput {

    @Field(() => [SupplierCreateWithoutVendorInput], {nullable:true})
    create?: Array<SupplierCreateWithoutVendorInput>;

    @Field(() => [SupplierCreateOrConnectWithoutVendorInput], {nullable:true})
    connectOrCreate?: Array<SupplierCreateOrConnectWithoutVendorInput>;

    @Field(() => [SupplierUpsertWithWhereUniqueWithoutVendorInput], {nullable:true})
    upsert?: Array<SupplierUpsertWithWhereUniqueWithoutVendorInput>;

    @Field(() => SupplierCreateManyVendorInputEnvelope, {nullable:true})
    createMany?: SupplierCreateManyVendorInputEnvelope;

    @Field(() => [SupplierWhereUniqueInput], {nullable:true})
    set?: Array<SupplierWhereUniqueInput>;

    @Field(() => [SupplierWhereUniqueInput], {nullable:true})
    disconnect?: Array<SupplierWhereUniqueInput>;

    @Field(() => [SupplierWhereUniqueInput], {nullable:true})
    delete?: Array<SupplierWhereUniqueInput>;

    @Field(() => [SupplierWhereUniqueInput], {nullable:true})
    connect?: Array<SupplierWhereUniqueInput>;

    @Field(() => [SupplierUpdateWithWhereUniqueWithoutVendorInput], {nullable:true})
    update?: Array<SupplierUpdateWithWhereUniqueWithoutVendorInput>;

    @Field(() => [SupplierUpdateManyWithWhereWithoutVendorInput], {nullable:true})
    updateMany?: Array<SupplierUpdateManyWithWhereWithoutVendorInput>;

    @Field(() => [SupplierScalarWhereInput], {nullable:true})
    deleteMany?: Array<SupplierScalarWhereInput>;
}
