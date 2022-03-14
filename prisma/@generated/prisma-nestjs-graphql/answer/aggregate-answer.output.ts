import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnswerCountAggregate } from './answer-count-aggregate.output';
import { AnswerMinAggregate } from './answer-min-aggregate.output';
import { AnswerMaxAggregate } from './answer-max-aggregate.output';

@ObjectType()
export class AggregateAnswer {

    @Field(() => AnswerCountAggregate, {nullable:true})
    _count?: AnswerCountAggregate;

    @Field(() => AnswerMinAggregate, {nullable:true})
    _min?: AnswerMinAggregate;

    @Field(() => AnswerMaxAggregate, {nullable:true})
    _max?: AnswerMaxAggregate;
}
