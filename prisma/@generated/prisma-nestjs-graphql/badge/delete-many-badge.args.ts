import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BadgeWhereInput } from './badge-where.input';

@ArgsType()
export class DeleteManyBadgeArgs {

    @Field(() => BadgeWhereInput, {nullable:true})
    where?: BadgeWhereInput;
}
