import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnswerCreateManyInput } from './answer-create-many.input';

@ArgsType()
export class CreateManyAnswerArgs {

    @Field(() => [AnswerCreateManyInput], {nullable:false})
    data!: Array<AnswerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
