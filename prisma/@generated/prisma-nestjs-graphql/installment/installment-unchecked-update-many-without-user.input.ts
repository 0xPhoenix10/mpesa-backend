import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateWithoutUserInput } from './installment-create-without-user.input';
import { InstallmentCreateOrConnectWithoutUserInput } from './installment-create-or-connect-without-user.input';
import { InstallmentUpsertWithWhereUniqueWithoutUserInput } from './installment-upsert-with-where-unique-without-user.input';
import { InstallmentCreateManyUserInputEnvelope } from './installment-create-many-user-input-envelope.input';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithWhereUniqueWithoutUserInput } from './installment-update-with-where-unique-without-user.input';
import { InstallmentUpdateManyWithWhereWithoutUserInput } from './installment-update-many-with-where-without-user.input';
import { InstallmentScalarWhereInput } from './installment-scalar-where.input';

@InputType()
export class InstallmentUncheckedUpdateManyWithoutUserInput {

    @Field(() => [InstallmentCreateWithoutUserInput], {nullable:true})
    create?: Array<InstallmentCreateWithoutUserInput>;

    @Field(() => [InstallmentCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<InstallmentCreateOrConnectWithoutUserInput>;

    @Field(() => [InstallmentUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<InstallmentUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => InstallmentCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstallmentCreateManyUserInputEnvelope;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    set?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    disconnect?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    delete?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    connect?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<InstallmentUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [InstallmentUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<InstallmentUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [InstallmentScalarWhereInput], {nullable:true})
    deleteMany?: Array<InstallmentScalarWhereInput>;
}
