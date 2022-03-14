import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ReferenceNumberSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    lastReference?: true;
}
