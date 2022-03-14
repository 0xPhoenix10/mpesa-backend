import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrustWhereUniqueInput } from './trust-where-unique.input';
import { TrustCreateInput } from './trust-create.input';
import { TrustUpdateInput } from './trust-update.input';

@ArgsType()
export class UpsertOneTrustArgs {

    @Field(() => TrustWhereUniqueInput, {nullable:false})
    where!: TrustWhereUniqueInput;

    @Field(() => TrustCreateInput, {nullable:false})
    create!: TrustCreateInput;

    @Field(() => TrustUpdateInput, {nullable:false})
    update!: TrustUpdateInput;
}
