import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsWhereUniqueInput } from './credit-configurations-wallets-where-unique.input';
import { CreditConfigurationsWalletsUpdateWithoutConfigurationInput } from './credit-configurations-wallets-update-without-configuration.input';
import { CreditConfigurationsWalletsCreateWithoutConfigurationInput } from './credit-configurations-wallets-create-without-configuration.input';

@InputType()
export class CreditConfigurationsWalletsUpsertWithWhereUniqueWithoutConfigurationInput {

    @Field(() => CreditConfigurationsWalletsWhereUniqueInput, {nullable:false})
    where!: CreditConfigurationsWalletsWhereUniqueInput;

    @Field(() => CreditConfigurationsWalletsUpdateWithoutConfigurationInput, {nullable:false})
    update!: CreditConfigurationsWalletsUpdateWithoutConfigurationInput;

    @Field(() => CreditConfigurationsWalletsCreateWithoutConfigurationInput, {nullable:false})
    create!: CreditConfigurationsWalletsCreateWithoutConfigurationInput;
}
