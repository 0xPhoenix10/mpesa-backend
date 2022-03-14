import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BadgeWhereUniqueInput } from './badge-where-unique.input';
import { BadgeCreateInput } from './badge-create.input';
import { BadgeUpdateInput } from './badge-update.input';

@ArgsType()
export class UpsertOneBadgeArgs {

    @Field(() => BadgeWhereUniqueInput, {nullable:false})
    where!: BadgeWhereUniqueInput;

    @Field(() => BadgeCreateInput, {nullable:false})
    create!: BadgeCreateInput;

    @Field(() => BadgeUpdateInput, {nullable:false})
    update!: BadgeUpdateInput;
}
