import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgeWhereInput } from './badge-where.input';

@InputType()
export class BadgeListRelationFilter {

    @Field(() => BadgeWhereInput, {nullable:true})
    every?: BadgeWhereInput;

    @Field(() => BadgeWhereInput, {nullable:true})
    some?: BadgeWhereInput;

    @Field(() => BadgeWhereInput, {nullable:true})
    none?: BadgeWhereInput;
}
