import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerCreateWithoutAnsweredInput } from './answer-create-without-answered.input';
import { AnswerCreateOrConnectWithoutAnsweredInput } from './answer-create-or-connect-without-answered.input';
import { AnswerCreateManyAnsweredInputEnvelope } from './answer-create-many-answered-input-envelope.input';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';

@InputType()
export class AnswerUncheckedCreateNestedManyWithoutAnsweredInput {

    @Field(() => [AnswerCreateWithoutAnsweredInput], {nullable:true})
    create?: Array<AnswerCreateWithoutAnsweredInput>;

    @Field(() => [AnswerCreateOrConnectWithoutAnsweredInput], {nullable:true})
    connectOrCreate?: Array<AnswerCreateOrConnectWithoutAnsweredInput>;

    @Field(() => AnswerCreateManyAnsweredInputEnvelope, {nullable:true})
    createMany?: AnswerCreateManyAnsweredInputEnvelope;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    connect?: Array<AnswerWhereUniqueInput>;
}
