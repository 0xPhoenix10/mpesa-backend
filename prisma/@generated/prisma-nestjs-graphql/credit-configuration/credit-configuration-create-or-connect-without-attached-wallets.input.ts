import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';
import { CreditConfigurationCreateWithoutAttachedWalletsInput } from './credit-configuration-create-without-attached-wallets.input';

@InputType()
export class CreditConfigurationCreateOrConnectWithoutAttachedWalletsInput {

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:false})
    where!: CreditConfigurationWhereUniqueInput;

    @Field(() => CreditConfigurationCreateWithoutAttachedWalletsInput, {nullable:false})
    create!: CreditConfigurationCreateWithoutAttachedWalletsInput;
}
