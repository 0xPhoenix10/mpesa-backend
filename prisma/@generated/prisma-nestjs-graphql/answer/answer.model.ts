import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Wallet } from '../wallet/wallet.model';
import { User } from '../user/user.model';
import { Question } from '../question/question.model';

@ObjectType()
export class Answer {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    questionId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    answer!: string;

    @Field(() => String, {nullable:true})
    answeredBy!: string | null;

    @Field(() => String, {nullable:true})
    answeredByReference!: string | null;

    @Field(() => String, {nullable:false})
    account!: string;

    @Field(() => Wallet, {nullable:false})
    wallet?: Wallet;

    @Field(() => User, {nullable:true})
    answered?: User | null;

    @Field(() => Question, {nullable:false})
    question?: Question;
}
