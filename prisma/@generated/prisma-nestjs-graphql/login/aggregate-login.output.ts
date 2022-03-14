import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LoginCountAggregate } from './login-count-aggregate.output';
import { LoginMinAggregate } from './login-min-aggregate.output';
import { LoginMaxAggregate } from './login-max-aggregate.output';

@ObjectType()
export class AggregateLogin {

    @Field(() => LoginCountAggregate, {nullable:true})
    _count?: LoginCountAggregate;

    @Field(() => LoginMinAggregate, {nullable:true})
    _min?: LoginMinAggregate;

    @Field(() => LoginMaxAggregate, {nullable:true})
    _max?: LoginMaxAggregate;
}
