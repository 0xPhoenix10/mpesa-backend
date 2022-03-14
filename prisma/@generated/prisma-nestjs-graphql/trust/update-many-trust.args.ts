import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrustUpdateManyMutationInput } from './trust-update-many-mutation.input';
import { TrustWhereInput } from './trust-where.input';

@ArgsType()
export class UpdateManyTrustArgs {

    @Field(() => TrustUpdateManyMutationInput, {nullable:false})
    data!: TrustUpdateManyMutationInput;

    @Field(() => TrustWhereInput, {nullable:true})
    where?: TrustWhereInput;
}
