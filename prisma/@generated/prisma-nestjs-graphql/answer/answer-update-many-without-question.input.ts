import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerCreateWithoutQuestionInput } from './answer-create-without-question.input';
import { AnswerCreateOrConnectWithoutQuestionInput } from './answer-create-or-connect-without-question.input';
import { AnswerUpsertWithWhereUniqueWithoutQuestionInput } from './answer-upsert-with-where-unique-without-question.input';
import { AnswerCreateManyQuestionInputEnvelope } from './answer-create-many-question-input-envelope.input';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { AnswerUpdateWithWhereUniqueWithoutQuestionInput } from './answer-update-with-where-unique-without-question.input';
import { AnswerUpdateManyWithWhereWithoutQuestionInput } from './answer-update-many-with-where-without-question.input';
import { AnswerScalarWhereInput } from './answer-scalar-where.input';

@InputType()
export class AnswerUpdateManyWithoutQuestionInput {

    @Field(() => [AnswerCreateWithoutQuestionInput], {nullable:true})
    create?: Array<AnswerCreateWithoutQuestionInput>;

    @Field(() => [AnswerCreateOrConnectWithoutQuestionInput], {nullable:true})
    connectOrCreate?: Array<AnswerCreateOrConnectWithoutQuestionInput>;

    @Field(() => [AnswerUpsertWithWhereUniqueWithoutQuestionInput], {nullable:true})
    upsert?: Array<AnswerUpsertWithWhereUniqueWithoutQuestionInput>;

    @Field(() => AnswerCreateManyQuestionInputEnvelope, {nullable:true})
    createMany?: AnswerCreateManyQuestionInputEnvelope;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    set?: Array<AnswerWhereUniqueInput>;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    disconnect?: Array<AnswerWhereUniqueInput>;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    delete?: Array<AnswerWhereUniqueInput>;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    connect?: Array<AnswerWhereUniqueInput>;

    @Field(() => [AnswerUpdateWithWhereUniqueWithoutQuestionInput], {nullable:true})
    update?: Array<AnswerUpdateWithWhereUniqueWithoutQuestionInput>;

    @Field(() => [AnswerUpdateManyWithWhereWithoutQuestionInput], {nullable:true})
    updateMany?: Array<AnswerUpdateManyWithWhereWithoutQuestionInput>;

    @Field(() => [AnswerScalarWhereInput], {nullable:true})
    deleteMany?: Array<AnswerScalarWhereInput>;
}
