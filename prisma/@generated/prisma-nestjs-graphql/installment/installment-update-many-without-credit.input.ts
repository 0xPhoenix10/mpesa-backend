import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateWithoutCreditInput } from './installment-create-without-credit.input';
import { InstallmentCreateOrConnectWithoutCreditInput } from './installment-create-or-connect-without-credit.input';
import { InstallmentUpsertWithWhereUniqueWithoutCreditInput } from './installment-upsert-with-where-unique-without-credit.input';
import { InstallmentCreateManyCreditInputEnvelope } from './installment-create-many-credit-input-envelope.input';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithWhereUniqueWithoutCreditInput } from './installment-update-with-where-unique-without-credit.input';
import { InstallmentUpdateManyWithWhereWithoutCreditInput } from './installment-update-many-with-where-without-credit.input';
import { InstallmentScalarWhereInput } from './installment-scalar-where.input';

@InputType()
export class InstallmentUpdateManyWithoutCreditInput {

    @Field(() => [InstallmentCreateWithoutCreditInput], {nullable:true})
    create?: Array<InstallmentCreateWithoutCreditInput>;

    @Field(() => [InstallmentCreateOrConnectWithoutCreditInput], {nullable:true})
    connectOrCreate?: Array<InstallmentCreateOrConnectWithoutCreditInput>;

    @Field(() => [InstallmentUpsertWithWhereUniqueWithoutCreditInput], {nullable:true})
    upsert?: Array<InstallmentUpsertWithWhereUniqueWithoutCreditInput>;

    @Field(() => InstallmentCreateManyCreditInputEnvelope, {nullable:true})
    createMany?: InstallmentCreateManyCreditInputEnvelope;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    set?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    disconnect?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    delete?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    connect?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentUpdateWithWhereUniqueWithoutCreditInput], {nullable:true})
    update?: Array<InstallmentUpdateWithWhereUniqueWithoutCreditInput>;

    @Field(() => [InstallmentUpdateManyWithWhereWithoutCreditInput], {nullable:true})
    updateMany?: Array<InstallmentUpdateManyWithWhereWithoutCreditInput>;

    @Field(() => [InstallmentScalarWhereInput], {nullable:true})
    deleteMany?: Array<InstallmentScalarWhereInput>;
}
