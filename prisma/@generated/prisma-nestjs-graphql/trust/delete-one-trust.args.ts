import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrustWhereUniqueInput } from './trust-where-unique.input';

@ArgsType()
export class DeleteOneTrustArgs {

    @Field(() => TrustWhereUniqueInput, {nullable:false})
    where!: TrustWhereUniqueInput;
}
