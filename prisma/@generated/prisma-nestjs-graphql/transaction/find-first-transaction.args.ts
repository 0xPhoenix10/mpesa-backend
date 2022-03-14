import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionWhereInput } from './transaction-where.input';
import { TransactionOrderByWithRelationInput } from './transaction-order-by-with-relation.input';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TransactionScalarFieldEnum } from './transaction-scalar-field.enum';

@ArgsType()
export class FindFirstTransactionArgs {

    @Field(() => TransactionWhereInput, {nullable:true})
    where?: TransactionWhereInput;

    @Field(() => [TransactionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TransactionOrderByWithRelationInput>;

    @Field(() => TransactionWhereUniqueInput, {nullable:true})
    cursor?: TransactionWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TransactionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TransactionScalarFieldEnum>;
}
