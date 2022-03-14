import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { WalletOrderByWithRelationInput } from '../wallet/wallet-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { QuestionOrderByWithRelationInput } from '../question/question-order-by-with-relation.input';

@InputType()
export class AnswerOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    questionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    answer?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    answeredBy?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    answeredByReference?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    account?: keyof typeof SortOrder;

    @Field(() => WalletOrderByWithRelationInput, {nullable:true})
    wallet?: WalletOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    answered?: UserOrderByWithRelationInput;

    @Field(() => QuestionOrderByWithRelationInput, {nullable:true})
    question?: QuestionOrderByWithRelationInput;
}
