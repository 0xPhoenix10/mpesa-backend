import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutAnswersInput } from './wallet-update-without-answers.input';
import { WalletCreateWithoutAnswersInput } from './wallet-create-without-answers.input';

@InputType()
export class WalletUpsertWithoutAnswersInput {

    @Field(() => WalletUpdateWithoutAnswersInput, {nullable:false})
    update!: WalletUpdateWithoutAnswersInput;

    @Field(() => WalletCreateWithoutAnswersInput, {nullable:false})
    create!: WalletCreateWithoutAnswersInput;
}
