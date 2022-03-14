import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsUpdateManyMutationInput } from './credit-configurations-wallets-update-many-mutation.input';
import { CreditConfigurationsWalletsWhereInput } from './credit-configurations-wallets-where.input';

@ArgsType()
export class UpdateManyCreditConfigurationsWalletsArgs {

    @Field(() => CreditConfigurationsWalletsUpdateManyMutationInput, {nullable:false})
    data!: CreditConfigurationsWalletsUpdateManyMutationInput;

    @Field(() => CreditConfigurationsWalletsWhereInput, {nullable:true})
    where?: CreditConfigurationsWalletsWhereInput;
}
