import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnswerCreateManyAnsweredInput } from './answer-create-many-answered.input';

@InputType()
export class AnswerCreateManyAnsweredInputEnvelope {

    @Field(() => [AnswerCreateManyAnsweredInput], {nullable:false})
    data!: Array<AnswerCreateManyAnsweredInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
