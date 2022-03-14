import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BadgeCreateManyInput } from './badge-create-many.input';

@ArgsType()
export class CreateManyBadgeArgs {

    @Field(() => [BadgeCreateManyInput], {nullable:false})
    data!: Array<BadgeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
