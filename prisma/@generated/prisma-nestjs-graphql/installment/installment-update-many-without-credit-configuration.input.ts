import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateWithoutCreditConfigurationInput } from './installment-create-without-credit-configuration.input';
import { InstallmentCreateOrConnectWithoutCreditConfigurationInput } from './installment-create-or-connect-without-credit-configuration.input';
import { InstallmentUpsertWithWhereUniqueWithoutCreditConfigurationInput } from './installment-upsert-with-where-unique-without-credit-configuration.input';
import { InstallmentCreateManyCreditConfigurationInputEnvelope } from './installment-create-many-credit-configuration-input-envelope.input';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';
import { InstallmentUpdateWithWhereUniqueWithoutCreditConfigurationInput } from './installment-update-with-where-unique-without-credit-configuration.input';
import { InstallmentUpdateManyWithWhereWithoutCreditConfigurationInput } from './installment-update-many-with-where-without-credit-configuration.input';
import { InstallmentScalarWhereInput } from './installment-scalar-where.input';

@InputType()
export class InstallmentUpdateManyWithoutCreditConfigurationInput {

    @Field(() => [InstallmentCreateWithoutCreditConfigurationInput], {nullable:true})
    create?: Array<InstallmentCreateWithoutCreditConfigurationInput>;

    @Field(() => [InstallmentCreateOrConnectWithoutCreditConfigurationInput], {nullable:true})
    connectOrCreate?: Array<InstallmentCreateOrConnectWithoutCreditConfigurationInput>;

    @Field(() => [InstallmentUpsertWithWhereUniqueWithoutCreditConfigurationInput], {nullable:true})
    upsert?: Array<InstallmentUpsertWithWhereUniqueWithoutCreditConfigurationInput>;

    @Field(() => InstallmentCreateManyCreditConfigurationInputEnvelope, {nullable:true})
    createMany?: InstallmentCreateManyCreditConfigurationInputEnvelope;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    set?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    disconnect?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    delete?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    connect?: Array<InstallmentWhereUniqueInput>;

    @Field(() => [InstallmentUpdateWithWhereUniqueWithoutCreditConfigurationInput], {nullable:true})
    update?: Array<InstallmentUpdateWithWhereUniqueWithoutCreditConfigurationInput>;

    @Field(() => [InstallmentUpdateManyWithWhereWithoutCreditConfigurationInput], {nullable:true})
    updateMany?: Array<InstallmentUpdateManyWithWhereWithoutCreditConfigurationInput>;

    @Field(() => [InstallmentScalarWhereInput], {nullable:true})
    deleteMany?: Array<InstallmentScalarWhereInput>;
}
