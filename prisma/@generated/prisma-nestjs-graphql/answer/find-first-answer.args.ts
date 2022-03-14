import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnswerWhereInput } from './answer-where.input';
import { AnswerOrderByWithRelationInput } from './answer-order-by-with-relation.input';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AnswerScalarFieldEnum } from './answer-scalar-field.enum';

@ArgsType()
export class FindFirstAnswerArgs {

    @Field(() => AnswerWhereInput, {nullable:true})
    where?: AnswerWhereInput;

    @Field(() => [AnswerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AnswerOrderByWithRelationInput>;

    @Field(() => AnswerWhereUniqueInput, {nullable:true})
    cursor?: AnswerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AnswerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AnswerScalarFieldEnum>;
}
