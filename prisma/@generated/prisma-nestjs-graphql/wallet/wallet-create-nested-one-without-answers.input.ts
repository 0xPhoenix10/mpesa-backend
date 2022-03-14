import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutAnswersInput } from './wallet-create-without-answers.input';
import { WalletCreateOrConnectWithoutAnswersInput } from './wallet-create-or-connect-without-answers.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';

@InputType()
export class WalletCreateNestedOneWithoutAnswersInput {

    @Field(() => WalletCreateWithoutAnswersInput, {nullable:true})
    create?: WalletCreateWithoutAnswersInput;

    @Field(() => WalletCreateOrConnectWithoutAnswersInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutAnswersInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;
}
