import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsCreateWithoutConfigurationInput } from './credit-configurations-wallets-create-without-configuration.input';
import { CreditConfigurationsWalletsCreateOrConnectWithoutConfigurationInput } from './credit-configurations-wallets-create-or-connect-without-configuration.input';
import { CreditConfigurationsWalletsUpsertWithWhereUniqueWithoutConfigurationInput } from './credit-configurations-wallets-upsert-with-where-unique-without-configuration.input';
import { CreditConfigurationsWalletsCreateManyConfigurationInputEnvelope } from './credit-configurations-wallets-create-many-configuration-input-envelope.input';
import { CreditConfigurationsWalletsWhereUniqueInput } from './credit-configurations-wallets-where-unique.input';
import { CreditConfigurationsWalletsUpdateWithWhereUniqueWithoutConfigurationInput } from './credit-configurations-wallets-update-with-where-unique-without-configuration.input';
import { CreditConfigurationsWalletsUpdateManyWithWhereWithoutConfigurationInput } from './credit-configurations-wallets-update-many-with-where-without-configuration.input';
import { CreditConfigurationsWalletsScalarWhereInput } from './credit-configurations-wallets-scalar-where.input';

@InputType()
export class CreditConfigurationsWalletsUpdateManyWithoutConfigurationInput {

    @Field(() => [CreditConfigurationsWalletsCreateWithoutConfigurationInput], {nullable:true})
    create?: Array<CreditConfigurationsWalletsCreateWithoutConfigurationInput>;

    @Field(() => [CreditConfigurationsWalletsCreateOrConnectWithoutConfigurationInput], {nullable:true})
    connectOrCreate?: Array<CreditConfigurationsWalletsCreateOrConnectWithoutConfigurationInput>;

    @Field(() => [CreditConfigurationsWalletsUpsertWithWhereUniqueWithoutConfigurationInput], {nullable:true})
    upsert?: Array<CreditConfigurationsWalletsUpsertWithWhereUniqueWithoutConfigurationInput>;

    @Field(() => CreditConfigurationsWalletsCreateManyConfigurationInputEnvelope, {nullable:true})
    createMany?: CreditConfigurationsWalletsCreateManyConfigurationInputEnvelope;

    @Field(() => [CreditConfigurationsWalletsWhereUniqueInput], {nullable:true})
    set?: Array<CreditConfigurationsWalletsWhereUniqueInput>;

    @Field(() => [CreditConfigurationsWalletsWhereUniqueInput], {nullable:true})
    disconnect?: Array<CreditConfigurationsWalletsWhereUniqueInput>;

    @Field(() => [CreditConfigurationsWalletsWhereUniqueInput], {nullable:true})
    delete?: Array<CreditConfigurationsWalletsWhereUniqueInput>;

    @Field(() => [CreditConfigurationsWalletsWhereUniqueInput], {nullable:true})
    connect?: Array<CreditConfigurationsWalletsWhereUniqueInput>;

    @Field(() => [CreditConfigurationsWalletsUpdateWithWhereUniqueWithoutConfigurationInput], {nullable:true})
    update?: Array<CreditConfigurationsWalletsUpdateWithWhereUniqueWithoutConfigurationInput>;

    @Field(() => [CreditConfigurationsWalletsUpdateManyWithWhereWithoutConfigurationInput], {nullable:true})
    updateMany?: Array<CreditConfigurationsWalletsUpdateManyWithWhereWithoutConfigurationInput>;

    @Field(() => [CreditConfigurationsWalletsScalarWhereInput], {nullable:true})
    deleteMany?: Array<CreditConfigurationsWalletsScalarWhereInput>;
}
