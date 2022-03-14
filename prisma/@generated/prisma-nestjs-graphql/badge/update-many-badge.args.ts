import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BadgeUpdateManyMutationInput } from './badge-update-many-mutation.input';
import { BadgeWhereInput } from './badge-where.input';

@ArgsType()
export class UpdateManyBadgeArgs {

    @Field(() => BadgeUpdateManyMutationInput, {nullable:false})
    data!: BadgeUpdateManyMutationInput;

    @Field(() => BadgeWhereInput, {nullable:true})
    where?: BadgeWhereInput;
}
