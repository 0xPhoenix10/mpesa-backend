import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReferenceNumberCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    prefix?: true;

    @Field(() => Boolean, {nullable:true})
    lastReference?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
