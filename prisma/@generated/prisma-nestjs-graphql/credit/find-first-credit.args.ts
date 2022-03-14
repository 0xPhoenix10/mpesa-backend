import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CreditWhereInput } from './credit-where.input';
import { CreditOrderByWithRelationInput } from './credit-order-by-with-relation.input';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CreditScalarFieldEnum } from './credit-scalar-field.enum';

@ArgsType()
export class FindFirstCreditArgs {

    @Field(() => CreditWhereInput, {nullable:true})
    where?: CreditWhereInput;

    @Field(() => [CreditOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CreditOrderByWithRelationInput>;

    @Field(() => CreditWhereUniqueInput, {nullable:true})
    cursor?: CreditWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CreditScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CreditScalarFieldEnum>;
}
