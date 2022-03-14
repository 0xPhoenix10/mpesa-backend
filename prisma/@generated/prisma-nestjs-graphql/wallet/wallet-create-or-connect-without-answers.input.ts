import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletCreateWithoutAnswersInput } from './wallet-create-without-answers.input';

@InputType()
export class WalletCreateOrConnectWithoutAnswersInput {

    @Field(() => WalletWhereUniqueInput, {nullable:false})
    where!: WalletWhereUniqueInput;

    @Field(() => WalletCreateWithoutAnswersInput, {nullable:false})
    create!: WalletCreateWithoutAnswersInput;
}
