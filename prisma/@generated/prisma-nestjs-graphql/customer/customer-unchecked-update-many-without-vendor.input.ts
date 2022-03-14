import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutVendorInput } from './customer-create-without-vendor.input';
import { CustomerCreateOrConnectWithoutVendorInput } from './customer-create-or-connect-without-vendor.input';
import { CustomerUpsertWithWhereUniqueWithoutVendorInput } from './customer-upsert-with-where-unique-without-vendor.input';
import { CustomerCreateManyVendorInputEnvelope } from './customer-create-many-vendor-input-envelope.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerUpdateWithWhereUniqueWithoutVendorInput } from './customer-update-with-where-unique-without-vendor.input';
import { CustomerUpdateManyWithWhereWithoutVendorInput } from './customer-update-many-with-where-without-vendor.input';
import { CustomerScalarWhereInput } from './customer-scalar-where.input';

@InputType()
export class CustomerUncheckedUpdateManyWithoutVendorInput {

    @Field(() => [CustomerCreateWithoutVendorInput], {nullable:true})
    create?: Array<CustomerCreateWithoutVendorInput>;

    @Field(() => [CustomerCreateOrConnectWithoutVendorInput], {nullable:true})
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutVendorInput>;

    @Field(() => [CustomerUpsertWithWhereUniqueWithoutVendorInput], {nullable:true})
    upsert?: Array<CustomerUpsertWithWhereUniqueWithoutVendorInput>;

    @Field(() => CustomerCreateManyVendorInputEnvelope, {nullable:true})
    createMany?: CustomerCreateManyVendorInputEnvelope;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    set?: Array<CustomerWhereUniqueInput>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    disconnect?: Array<CustomerWhereUniqueInput>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    delete?: Array<CustomerWhereUniqueInput>;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    connect?: Array<CustomerWhereUniqueInput>;

    @Field(() => [CustomerUpdateWithWhereUniqueWithoutVendorInput], {nullable:true})
    update?: Array<CustomerUpdateWithWhereUniqueWithoutVendorInput>;

    @Field(() => [CustomerUpdateManyWithWhereWithoutVendorInput], {nullable:true})
    updateMany?: Array<CustomerUpdateManyWithWhereWithoutVendorInput>;

    @Field(() => [CustomerScalarWhereInput], {nullable:true})
    deleteMany?: Array<CustomerScalarWhereInput>;
}
