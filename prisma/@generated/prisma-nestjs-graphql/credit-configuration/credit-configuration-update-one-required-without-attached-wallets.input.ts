import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationCreateWithoutAttachedWalletsInput } from './credit-configuration-create-without-attached-wallets.input';
import { CreditConfigurationCreateOrConnectWithoutAttachedWalletsInput } from './credit-configuration-create-or-connect-without-attached-wallets.input';
import { CreditConfigurationUpsertWithoutAttachedWalletsInput } from './credit-configuration-upsert-without-attached-wallets.input';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';
import { CreditConfigurationUpdateWithoutAttachedWalletsInput } from './credit-configuration-update-without-attached-wallets.input';

@InputType()
export class CreditConfigurationUpdateOneRequiredWithoutAttachedWalletsInput {

    @Field(() => CreditConfigurationCreateWithoutAttachedWalletsInput, {nullable:true})
    create?: CreditConfigurationCreateWithoutAttachedWalletsInput;

    @Field(() => CreditConfigurationCreateOrConnectWithoutAttachedWalletsInput, {nullable:true})
    connectOrCreate?: CreditConfigurationCreateOrConnectWithoutAttachedWalletsInput;

    @Field(() => CreditConfigurationUpsertWithoutAttachedWalletsInput, {nullable:true})
    upsert?: CreditConfigurationUpsertWithoutAttachedWalletsInput;

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:true})
    connect?: CreditConfigurationWhereUniqueInput;

    @Field(() => CreditConfigurationUpdateWithoutAttachedWalletsInput, {nullable:true})
    update?: CreditConfigurationUpdateWithoutAttachedWalletsInput;
}
