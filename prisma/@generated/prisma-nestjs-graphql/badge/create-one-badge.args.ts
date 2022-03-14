import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BadgeCreateInput } from './badge-create.input';

@ArgsType()
export class CreateOneBadgeArgs {

    @Field(() => BadgeCreateInput, {nullable:false})
    data!: BadgeCreateInput;
}
