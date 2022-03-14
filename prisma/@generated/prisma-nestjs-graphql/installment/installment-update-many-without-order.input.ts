import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateWithoutOrderInput } from './installment-create-without-order.input';
import { InstallmentCreateOrConnectWithoutOrderInput } from './installment-create-or-connect-without-order.input';
import { InstallmentUpsertWithWhereUniqueWithoutOrderInput } from './installment-upsert-with-where-unique-without-order.input';
import { InstallmentCreateManyOrderInputEnvelope } from './installment-create-many-order-input-envelope.input';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithWhereUniqueWithoutOrderInput } from './installment-update-with-where-unique-without-order.input';
import { InstallmentUpdateManyWithWhereWithoutOrderInput } from './installment-update-many-with-where-without-order.input';
import { InstallmentScalarWhereInput } from './installment-scalar-where.input';

@InputType()
export class InstallmentUpdateManyWithoutOrderInput {

    @Field(() => [InstallmentCreateWithoutOrderInput], {nullable:true})
    create?: Array<InstallmentCreateWithoutOrderInput>;

    @Field(() => [InstallmentCreateOrConnectWithoutOrderInput], {nullable:true})
    connectOrCreate?: Array<InstallmentCreateOrConnectWithoutOrderInput>;

    @Field(() => [InstallmentUpsertWithWhereUniqueWithoutOrderInput], {nullable:true})
    upsert?: Array<InstallmentUpsertWithWhereUniqueWithoutOrderInput>;

    @Field(() => InstallmentCreateManyOrderInputEnvelope, {nullable:true})
    createMany?: InstallmentCreateManyOrderInputEnvelope;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    set?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    disconnect?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    delete?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    connect?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentUpdateWithWhereUniqueWithoutOrderInput], {nullable:true})
    update?: Array<InstallmentUpdateWithWhereUniqueWithoutOrderInput>;

    @Field(() => [InstallmentUpdateManyWithWhereWithoutOrderInput], {nullable:true})
    updateMany?: Array<InstallmentUpdateManyWithWhereWithoutOrderInput>;

    @Field(() => [InstallmentScalarWhereInput], {nullable:true})
    deleteMany?: Array<InstallmentScalarWhereInput>;
}
