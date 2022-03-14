import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerCreateWithoutVendorInput } from './customer-create-without-vendor.input';
import { CustomerCreateOrConnectWithoutVendorInput } from './customer-create-or-connect-without-vendor.input';
import { CustomerCreateManyVendorInputEnvelope } from './customer-create-many-vendor-input-envelope.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@InputType()
export class CustomerCreateNestedManyWithoutVendorInput {

    @Field(() => [CustomerCreateWithoutVendorInput], {nullable:true})
    create?: Array<CustomerCreateWithoutVendorInput>;

    @Field(() => [CustomerCreateOrConnectWithoutVendorInput], {nullable:true})
    connectOrCreate?: Array<CustomerCreateOrConnectWithoutVendorInput>;

    @Field(() => CustomerCreateManyVendorInputEnvelope, {nullable:true})
    createMany?: CustomerCreateManyVendorInputEnvelope;

    @Field(() => [CustomerWhereUniqueInput], {nullable:true})
    connect?: Array<CustomerWhereUniqueInput>;
}
