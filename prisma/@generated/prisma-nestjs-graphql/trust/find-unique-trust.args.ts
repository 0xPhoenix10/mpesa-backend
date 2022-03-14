import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrustWhereUniqueInput } from './trust-where-unique.input';

@ArgsType()
export class FindUniqueTrustArgs {

    @Field(() => TrustWhereUniqueInput, {nullable:false})
    where!: TrustWhereUniqueInput;
}
