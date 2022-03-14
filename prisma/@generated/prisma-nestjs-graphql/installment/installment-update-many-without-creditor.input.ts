import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateWithoutCreditorInput } from './installment-create-without-creditor.input';
import { InstallmentCreateOrConnectWithoutCreditorInput } from './installment-create-or-connect-without-creditor.input';
import { InstallmentUpsertWithWhereUniqueWithoutCreditorInput } from './installment-upsert-with-where-unique-without-creditor.input';
import { InstallmentCreateManyCreditorInputEnvelope } from './installment-create-many-creditor-input-envelope.input';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithWhereUniqueWithoutCreditorInput } from './installment-update-with-where-unique-without-creditor.input';
import { InstallmentUpdateManyWithWhereWithoutCreditorInput } from './installment-update-many-with-where-without-creditor.input';
import { InstallmentScalarWhereInput } from './installment-scalar-where.input';

@InputType()
export class InstallmentUpdateManyWithoutCreditorInput {

    @Field(() => [InstallmentCreateWithoutCreditorInput], {nullable:true})
    create?: Array<InstallmentCreateWithoutCreditorInput>;

    @Field(() => [InstallmentCreateOrConnectWithoutCreditorInput], {nullable:true})
    connectOrCreate?: Array<InstallmentCreateOrConnectWithoutCreditorInput>;

    @Field(() => [InstallmentUpsertWithWhereUniqueWithoutCreditorInput], {nullable:true})
    upsert?: Array<InstallmentUpsertWithWhereUniqueWithoutCreditorInput>;

    @Field(() => InstallmentCreateManyCreditorInputEnvelope, {nullable:true})
    createMany?: InstallmentCreateManyCreditorInputEnvelope;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    set?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    disconnect?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    delete?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    connect?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentUpdateWithWhereUniqueWithoutCreditorInput], {nullable:true})
    update?: Array<InstallmentUpdateWithWhereUniqueWithoutCreditorInput>;

    @Field(() => [InstallmentUpdateManyWithWhereWithoutCreditorInput], {nullable:true})
    updateMany?: Array<InstallmentUpdateManyWithWhereWithoutCreditorInput>;

    @Field(() => [InstallmentScalarWhereInput], {nullable:true})
    deleteMany?: Array<InstallmentScalarWhereInput>;
}
