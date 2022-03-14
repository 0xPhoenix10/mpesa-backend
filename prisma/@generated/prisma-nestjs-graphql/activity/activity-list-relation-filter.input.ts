import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityWhereInput } from './activity-where.input';

@InputType()
export class ActivityListRelationFilter {

    @Field(() => ActivityWhereInput, {nullable:true})
    every?: ActivityWhereInput;

    @Field(() => ActivityWhereInput, {nullable:true})
    some?: ActivityWhereInput;

    @Field(() => ActivityWhereInput, {nullable:true})
    none?: ActivityWhereInput;
}
