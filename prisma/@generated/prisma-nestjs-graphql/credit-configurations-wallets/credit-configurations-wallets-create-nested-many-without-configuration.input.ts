import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsCreateWithoutConfigurationInput } from './credit-configurations-wallets-create-without-configuration.input';
import { CreditConfigurationsWalletsCreateOrConnectWithoutConfigurationInput } from './credit-configurations-wallets-create-or-connect-without-configuration.input';
import { CreditConfigurationsWalletsCreateManyConfigurationInputEnvelope } from './credit-configurations-wallets-create-many-configuration-input-envelope.input';
import { CreditConfigurationsWalletsWhereUniqueInput } from './credit-configurations-wallets-where-unique.input';

@InputType()
export class CreditConfigurationsWalletsCreateNestedManyWithoutConfigurationInput {

    @Field(() => [CreditConfigurationsWalletsCreateWithoutConfigurationInput], {nullable:true})
    create?: Array<CreditConfigurationsWalletsCreateWithoutConfigurationInput>;

    @Field(() => [CreditConfigurationsWalletsCreateOrConnectWithoutConfigurationInput], {nullable:true})
    connectOrCreate?: Array<CreditConfigurationsWalletsCreateOrConnectWithoutConfigurationInput>;

    @Field(() => CreditConfigurationsWalletsCreateManyConfigurationInputEnvelope, {nullable:true})
    createMany?: CreditConfigurationsWalletsCreateManyConfigurationInputEnvelope;

    @Field(() => [CreditConfigurationsWalletsWhereUniqueInput], {nullable:true})
    connect?: Array<CreditConfigurationsWalletsWhereUniqueInput>;
}
