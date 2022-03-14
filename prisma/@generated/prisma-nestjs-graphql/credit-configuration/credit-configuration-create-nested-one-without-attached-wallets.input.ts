import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditConfigurationCreateWithoutAttachedWalletsInput } from './credit-configuration-create-without-attached-wallets.input';
import { CreditConfigurationCreateOrConnectWithoutAttachedWalletsInput } from './credit-configuration-create-or-connect-without-attached-wallets.input';
import { CreditConfigurationWhereUniqueInput } from './credit-configuration-where-unique.input';

@InputType()
export class CreditConfigurationCreateNestedOneWithoutAttachedWalletsInput {

    @Field(() => CreditConfigurationCreateWithoutAttachedWalletsInput, {nullable:true})
    create?: CreditConfigurationCreateWithoutAttachedWalletsInput;

    @Field(() => CreditConfigurationCreateOrConnectWithoutAttachedWalletsInput, {nullable:true})
    connectOrCreate?: CreditConfigurationCreateOrConnectWithoutAttachedWalletsInput;

    @Field(() => CreditConfigurationWhereUniqueInput, {nullable:true})
    connect?: CreditConfigurationWhereUniqueInput;
}
