import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrustWhereInput } from './trust-where.input';

@ArgsType()
export class DeleteManyTrustArgs {

    @Field(() => TrustWhereInput, {nullable:true})
    where?: TrustWhereInput;
}
