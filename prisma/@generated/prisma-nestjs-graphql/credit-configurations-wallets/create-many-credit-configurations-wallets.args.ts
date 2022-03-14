import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditConfigurationsWalletsCreateManyInput } from './credit-configurations-wallets-create-many.input';

@ArgsType()
export class CreateManyCreditConfigurationsWalletsArgs {

    @Field(() => [CreditConfigurationsWalletsCreateManyInput], {nullable:false})
    data!: Array<CreditConfigurationsWalletsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
