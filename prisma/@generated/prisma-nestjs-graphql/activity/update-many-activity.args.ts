import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActivityUpdateManyMutationInput } from './activity-update-many-mutation.input';
import { ActivityWhereInput } from './activity-where.input';

@ArgsType()
export class UpdateManyActivityArgs {

    @Field(() => ActivityUpdateManyMutationInput, {nullable:false})
    data!: ActivityUpdateManyMutationInput;

    @Field(() => ActivityWhereInput, {nullable:true})
    where?: ActivityWhereInput;
}
