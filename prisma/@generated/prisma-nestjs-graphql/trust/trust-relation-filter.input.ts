import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrustWhereInput } from './trust-where.input';

@InputType()
export class TrustRelationFilter {

    @Field(() => TrustWhereInput, {nullable:true})
    is?: TrustWhereInput;

    @Field(() => TrustWhereInput, {nullable:true})
    isNot?: TrustWhereInput;
}
