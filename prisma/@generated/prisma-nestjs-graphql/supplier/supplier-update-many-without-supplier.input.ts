import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SupplierCreateWithoutSupplierInput } from './supplier-create-without-supplier.input';
import { SupplierCreateOrConnectWithoutSupplierInput } from './supplier-create-or-connect-without-supplier.input';
import { SupplierUpsertWithWhereUniqueWithoutSupplierInput } from './supplier-upsert-with-where-unique-without-supplier.input';
import { SupplierCreateManySupplierInputEnvelope } from './supplier-create-many-supplier-input-envelope.input';
import { SupplierWhereUniqueInput } from './supplier-where-unique.input';
import { SupplierUpdateWithWhereUniqueWithoutSupplierInput } from './supplier-update-with-where-unique-without-supplier.input';
import { SupplierUpdateManyWithWhereWithoutSupplierInput } from './supplier-update-many-with-where-without-supplier.input';
import { SupplierScalarWhereInput } from './supplier-scalar-where.input';

@InputType()
export class SupplierUpdateManyWithoutSupplierInput {

    @Field(() => [SupplierCreateWithoutSupplierInput], {nullable:true})
    create?: Array<SupplierCreateWithoutSupplierInput>;

    @Field(() => [SupplierCreateOrConnectWithoutSupplierInput], {nullable:true})
    connectOrCreate?: Array<SupplierCreateOrConnectWithoutSupplierInput>;

    @Field(() => [SupplierUpsertWithWhereUniqueWithoutSupplierInput], {nullable:true})
    upsert?: Array<SupplierUpsertWithWhereUniqueWithoutSupplierInput>;

    @Field(() => SupplierCreateManySupplierInputEnvelope, {nullable:true})
    createMany?: SupplierCreateManySupplierInputEnvelope;

    @Field(() => [SupplierWhereUniqueInput], {nullable:true})
    set?: Array<SupplierWhereUniqueInput>;

    @Field(() => [SupplierWhereUniqueInput], {nullable:true})
    disconnect?: Array<SupplierWhereUniqueInput>;

    @Field(() => [SupplierWhereUniqueInput], {nullable:true})
    delete?: Array<SupplierWhereUniqueInput>;

    @Field(() => [SupplierWhereUniqueInput], {nullable:true})
    connect?: Array<SupplierWhereUniqueInput>;

    @Field(() => [SupplierUpdateWithWhereUniqueWithoutSupplierInput], {nullable:true})
    update?: Array<SupplierUpdateWithWhereUniqueWithoutSupplierInput>;

    @Field(() => [SupplierUpdateManyWithWhereWithoutSupplierInput], {nullable:true})
    updateMany?: Array<SupplierUpdateManyWithWhereWithoutSupplierInput>;

    @Field(() => [SupplierScalarWhereInput], {nullable:true})
    deleteMany?: Array<SupplierScalarWhereInput>;
}
