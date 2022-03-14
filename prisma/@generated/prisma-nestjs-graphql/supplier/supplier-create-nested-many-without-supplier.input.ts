import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupplierCreateWithoutSupplierInput } from './supplier-create-without-supplier.input';
import { SupplierCreateOrConnectWithoutSupplierInput } from './supplier-create-or-connect-without-supplier.input';
import { SupplierCreateManySupplierInputEnvelope } from './supplier-create-many-supplier-input-envelope.input';
import { SupplierWhereUniqueInput } from './supplier-where-unique.input';

@InputType()
export class SupplierCreateNestedManyWithoutSupplierInput {

    @Field(() => [SupplierCreateWithoutSupplierInput], {nullable:true})
    create?: Array<SupplierCreateWithoutSupplierInput>;

    @Field(() => [SupplierCreateOrConnectWithoutSupplierInput], {nullable:true})
    connectOrCreate?: Array<SupplierCreateOrConnectWithoutSupplierInput>;

    @Field(() => SupplierCreateManySupplierInputEnvelope, {nullable:true})
    createMany?: SupplierCreateManySupplierInputEnvelope;

    @Field(() => [SupplierWhereUniqueInput], {nullable:true})
    connect?: Array<SupplierWhereUniqueInput>;
}
