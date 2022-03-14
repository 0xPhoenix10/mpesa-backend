import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrustUpdateInput } from './trust-update.input';
import { TrustWhereUniqueInput } from './trust-where-unique.input';

@ArgsType()
export class UpdateOneTrustArgs {

    @Field(() => TrustUpdateInput, {nullable:false})
    data!: TrustUpdateInput;

    @Field(() => TrustWhereUniqueInput, {nullable:false})
    where!: TrustWhereUniqueInput;
}
