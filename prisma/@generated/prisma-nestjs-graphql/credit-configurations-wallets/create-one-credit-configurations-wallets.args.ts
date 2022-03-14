import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsCreateInput } from './credit-configurations-wallets-create.input';

@ArgsType()
export class CreateOneCreditConfigurationsWalletsArgs {

    @Field(() => CreditConfigurationsWalletsCreateInput, {nullable:false})
    data!: CreditConfigurationsWalletsCreateInput;
}
