import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateNestedOneWithoutAnswersInput } from '../wallet/wallet-create-nested-one-without-answers.input';
import { UserCreateNestedOneWithoutAnswersInput } from '../user/user-create-nested-one-without-answers.input';

@InputType()
export class AnswerCreateWithoutQuestionInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    answer!: string;

    @Field(() => String, {nullable:true})
    answeredByReference?: string;

    @Field(() => WalletCreateNestedOneWithoutAnswersInput, {nullable:false})
    wallet!: WalletCreateNestedOneWithoutAnswersInput;

    @Field(() => UserCreateNestedOneWithoutAnswersInput, {nullable:true})
    answered?: UserCreateNestedOneWithoutAnswersInput;
}
