import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityUpdateInput } from './activity-update.input';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';

@ArgsType()
export class UpdateOneActivityArgs {

    @Field(() => ActivityUpdateInput, {nullable:false})
    data!: ActivityUpdateInput;

    @Field(() => ActivityWhereUniqueInput, {nullable:false})
    where!: ActivityWhereUniqueInput;
}
