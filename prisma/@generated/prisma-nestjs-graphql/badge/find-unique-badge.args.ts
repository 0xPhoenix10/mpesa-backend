import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BadgeWhereUniqueInput } from './badge-where-unique.input';

@ArgsType()
export class FindUniqueBadgeArgs {

    @Field(() => BadgeWhereUniqueInput, {nullable:false})
    where!: BadgeWhereUniqueInput;
}
