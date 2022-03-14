import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityWhereUniqueInput } from './activity-where-unique.input';
import { ActivityCreateInput } from './activity-create.input';
import { ActivityUpdateInput } from './activity-update.input';

@ArgsType()
export class UpsertOneActivityArgs {

    @Field(() => ActivityWhereUniqueInput, {nullable:false})
    where!: ActivityWhereUniqueInput;

    @Field(() => ActivityCreateInput, {nullable:false})
    create!: ActivityCreateInput;

    @Field(() => ActivityUpdateInput, {nullable:false})
    update!: ActivityUpdateInput;
}
