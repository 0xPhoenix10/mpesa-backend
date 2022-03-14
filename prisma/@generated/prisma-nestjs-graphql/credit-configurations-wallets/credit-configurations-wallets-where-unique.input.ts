import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsWalletIdConfigurationIdCompoundUniqueInput } from './credit-configurations-wallets-wallet-id-configuration-id-compound-unique.input';

@InputType()
export class CreditConfigurationsWalletsWhereUniqueInput {

    @Field(() => CreditConfigurationsWalletsWalletIdConfigurationIdCompoundUniqueInput, {nullable:true})
    walletId_configurationId?: CreditConfigurationsWalletsWalletIdConfigurationIdCompoundUniqueInput;
}
