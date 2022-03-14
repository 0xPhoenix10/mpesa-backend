import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlacklistUpdateManyMutationInput } from './blacklist-update-many-mutation.input';
import { BlacklistWhereInput } from './blacklist-where.input';

@ArgsType()
export class UpdateManyBlacklistArgs {

    @Field(() => BlacklistUpdateManyMutationInput, {nullable:false})
    data!: BlacklistUpdateManyMutationInput;

    @Field(() => BlacklistWhereInput, {nullable:true})
    where?: BlacklistWhereInput;
}
