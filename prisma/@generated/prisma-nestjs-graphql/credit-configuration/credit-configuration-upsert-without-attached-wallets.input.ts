import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationUpdateWithoutAttachedWalletsInput } from './credit-configuration-update-without-attached-wallets.input';
import { CreditConfigurationCreateWithoutAttachedWalletsInput } from './credit-configuration-create-without-attached-wallets.input';

@InputType()
export class CreditConfigurationUpsertWithoutAttachedWalletsInput {

    @Field(() => CreditConfigurationUpdateWithoutAttachedWalletsInput, {nullable:false})
    update!: CreditConfigurationUpdateWithoutAttachedWalletsInput;

    @Field(() => CreditConfigurationCreateWithoutAttachedWalletsInput, {nullable:false})
    create!: CreditConfigurationCreateWithoutAttachedWalletsInput;
}
