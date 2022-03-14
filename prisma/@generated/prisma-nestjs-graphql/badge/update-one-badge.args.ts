import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BadgeUpdateInput } from './badge-update.input';
import { BadgeWhereUniqueInput } from './badge-where-unique.input';

@ArgsType()
export class UpdateOneBadgeArgs {

    @Field(() => BadgeUpdateInput, {nullable:false})
    data!: BadgeUpdateInput;

    @Field(() => BadgeWhereUniqueInput, {nullable:false})
    where!: BadgeWhereUniqueInput;
}
