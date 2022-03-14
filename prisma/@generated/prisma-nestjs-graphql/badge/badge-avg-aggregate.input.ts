import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BadgeAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    count?: true;
}
