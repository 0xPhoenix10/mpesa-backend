import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateWithoutCreditConfigurationInput } from './credit-create-without-credit-configuration.input';
import { CreditCreateOrConnectWithoutCreditConfigurationInput } from './credit-create-or-connect-without-credit-configuration.input';
import { CreditUpsertWithWhereUniqueWithoutCreditConfigurationInput } from './credit-upsert-with-where-unique-without-credit-configuration.input';
import { CreditCreateManyCreditConfigurationInputEnvelope } from './credit-create-many-credit-configuration-input-envelope.input';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithWhereUniqueWithoutCreditConfigurationInput } from './credit-update-with-where-unique-without-credit-configuration.input';
import { CreditUpdateManyWithWhereWithoutCreditConfigurationInput } from './credit-update-many-with-where-without-credit-configuration.input';
import { CreditScalarWhereInput } from './credit-scalar-where.input';

@InputType()
export class CreditUpdateManyWithoutCreditConfigurationInput {

    @Field(() => [CreditCreateWithoutCreditConfigurationInput], {nullable:true})
    create?: Array<CreditCreateWithoutCreditConfigurationInput>;

    @Field(() => [CreditCreateOrConnectWithoutCreditConfigurationInput], {nullable:true})
    connectOrCreate?: Array<CreditCreateOrConnectWithoutCreditConfigurationInput>;

    @Field(() => [CreditUpsertWithWhereUniqueWithoutCreditConfigurationInput], {nullable:true})
    upsert?: Array<CreditUpsertWithWhereUniqueWithoutCreditConfigurationInput>;

    @Field(() => CreditCreateManyCreditConfigurationInputEnvelope, {nullable:true})
    createMany?: CreditCreateManyCreditConfigurationInputEnvelope;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    set?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    disconnect?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    delete?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    connect?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditUpdateWithWhereUniqueWithoutCreditConfigurationInput], {nullable:true})
    update?: Array<CreditUpdateWithWhereUniqueWithoutCreditConfigurationInput>;

    @Field(() => [CreditUpdateManyWithWhereWithoutCreditConfigurationInput], {nullable:true})
    updateMany?: Array<CreditUpdateManyWithWhereWithoutCreditConfigurationInput>;

    @Field(() => [CreditScalarWhereInput], {nullable:true})
    deleteMany?: Array<CreditScalarWhereInput>;
}
