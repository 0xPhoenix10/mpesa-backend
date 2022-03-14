import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditRequestWhereInput } from './credit-request-where.input';
import { CreditRequestOrderByWithRelationInput } from './credit-request-order-by-with-relation.input';
import { CreditRequestWhereUniqueInput } from './credit-request-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CreditRequestScalarFieldEnum } from './credit-request-scalar-field.enum';

@ArgsType()
export class FindManyCreditRequestArgs {

    @Field(() => CreditRequestWhereInput, {nullable:true})
    where?: CreditRequestWhereInput;

    @Field(() => [CreditRequestOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CreditRequestOrderByWithRelationInput>;

    @Field(() => CreditRequestWhereUniqueInput, {nullable:true})
    cursor?: CreditRequestWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CreditRequestScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CreditRequestScalarFieldEnum>;
}
