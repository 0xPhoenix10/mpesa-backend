import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutAnswersInput } from './wallet-create-without-answers.input';
import { WalletCreateOrConnectWithoutAnswersInput } from './wallet-create-or-connect-without-answers.input';
import { WalletUpsertWithoutAnswersInput } from './wallet-upsert-without-answers.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutAnswersInput } from './wallet-update-without-answers.input';

@InputType()
export class WalletUpdateOneRequiredWithoutAnswersInput {

    @Field(() => WalletCreateWithoutAnswersInput, {nullable:true})
    create?: WalletCreateWithoutAnswersInput;

    @Field(() => WalletCreateOrConnectWithoutAnswersInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutAnswersInput;

    @Field(() => WalletUpsertWithoutAnswersInput, {nullable:true})
    upsert?: WalletUpsertWithoutAnswersInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutAnswersInput, {nullable:true})
    update?: WalletUpdateWithoutAnswersInput;
}
