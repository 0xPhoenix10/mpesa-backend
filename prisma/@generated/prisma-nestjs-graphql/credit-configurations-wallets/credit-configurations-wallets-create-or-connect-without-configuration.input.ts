import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsWhereUniqueInput } from './credit-configurations-wallets-where-unique.input';
import { CreditConfigurationsWalletsCreateWithoutConfigurationInput } from './credit-configurations-wallets-create-without-configuration.input';

@InputType()
export class CreditConfigurationsWalletsCreateOrConnectWithoutConfigurationInput {

    @Field(() => CreditConfigurationsWalletsWhereUniqueInput, {nullable:false})
    where!: CreditConfigurationsWalletsWhereUniqueInput;

    @Field(() => CreditConfigurationsWalletsCreateWithoutConfigurationInput, {nullable:false})
    create!: CreditConfigurationsWalletsCreateWithoutConfigurationInput;
}
