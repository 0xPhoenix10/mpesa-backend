import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsWhereInput } from './credit-configurations-wallets-where.input';

@ArgsType()
export class DeleteManyCreditConfigurationsWalletsArgs {

    @Field(() => CreditConfigurationsWalletsWhereInput, {nullable:true})
    where?: CreditConfigurationsWalletsWhereInput;
}
