import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrustWhereInput } from './trust-where.input';
import { TrustOrderByWithRelationInput } from './trust-order-by-with-relation.input';
import { TrustWhereUniqueInput } from './trust-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TrustScalarFieldEnum } from './trust-scalar-field.enum';

@ArgsType()
export class FindManyTrustArgs {

    @Field(() => TrustWhereInput, {nullable:true})
    where?: TrustWhereInput;

    @Field(() => [TrustOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TrustOrderByWithRelationInput>;

    @Field(() => TrustWhereUniqueInput, {nullable:true})
    cursor?: TrustWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TrustScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TrustScalarFieldEnum>;
}
