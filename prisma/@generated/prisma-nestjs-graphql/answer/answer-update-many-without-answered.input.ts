import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerCreateWithoutAnsweredInput } from './answer-create-without-answered.input';
import { AnswerCreateOrConnectWithoutAnsweredInput } from './answer-create-or-connect-without-answered.input';
import { AnswerUpsertWithWhereUniqueWithoutAnsweredInput } from './answer-upsert-with-where-unique-without-answered.input';
import { AnswerCreateManyAnsweredInputEnvelope } from './answer-create-many-answered-input-envelope.input';
import { AnswerWhereUniqueInput } from './answer-where-unique.input';
import { AnswerUpdateWithWhereUniqueWithoutAnsweredInput } from './answer-update-with-where-unique-without-answered.input';
import { AnswerUpdateManyWithWhereWithoutAnsweredInput } from './answer-update-many-with-where-without-answered.input';
import { AnswerScalarWhereInput } from './answer-scalar-where.input';

@InputType()
export class AnswerUpdateManyWithoutAnsweredInput {

    @Field(() => [AnswerCreateWithoutAnsweredInput], {nullable:true})
    create?: Array<AnswerCreateWithoutAnsweredInput>;

    @Field(() => [AnswerCreateOrConnectWithoutAnsweredInput], {nullable:true})
    connectOrCreate?: Array<AnswerCreateOrConnectWithoutAnsweredInput>;

    @Field(() => [AnswerUpsertWithWhereUniqueWithoutAnsweredInput], {nullable:true})
    upsert?: Array<AnswerUpsertWithWhereUniqueWithoutAnsweredInput>;

    @Field(() => AnswerCreateManyAnsweredInputEnvelope, {nullable:true})
    createMany?: AnswerCreateManyAnsweredInputEnvelope;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    set?: Array<AnswerWhereUniqueInput>;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    disconnect?: Array<AnswerWhereUniqueInput>;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    delete?: Array<AnswerWhereUniqueInput>;

    @Field(() => [AnswerWhereUniqueInput], {nullable:true})
    connect?: Array<AnswerWhereUniqueInput>;

    @Field(() => [AnswerUpdateWithWhereUniqueWithoutAnsweredInput], {nullable:true})
    update?: Array<AnswerUpdateWithWhereUniqueWithoutAnsweredInput>;

    @Field(() => [AnswerUpdateManyWithWhereWithoutAnsweredInput], {nullable:true})
    updateMany?: Array<AnswerUpdateManyWithWhereWithoutAnsweredInput>;

    @Field(() => [AnswerScalarWhereInput], {nullable:true})
    deleteMany?: Array<AnswerScalarWhereInput>;
}
