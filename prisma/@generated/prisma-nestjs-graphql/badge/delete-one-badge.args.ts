import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BadgeWhereUniqueInput } from './badge-where-unique.input';

@ArgsType()
export class DeleteOneBadgeArgs {

    @Field(() => BadgeWhereUniqueInput, {nullable:false})
    where!: BadgeWhereUniqueInput;
}
