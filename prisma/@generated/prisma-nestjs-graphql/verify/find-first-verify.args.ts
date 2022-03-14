import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VerifyWhereInput } from './verify-where.input';
import { VerifyOrderByWithRelationInput } from './verify-order-by-with-relation.input';
import { VerifyWhereUniqueInput } from './verify-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VerifyScalarFieldEnum } from './verify-scalar-field.enum';

@ArgsType()
export class FindFirstVerifyArgs {

    @Field(() => VerifyWhereInput, {nullable:true})
    where?: VerifyWhereInput;

    @Field(() => [VerifyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VerifyOrderByWithRelationInput>;

    @Field(() => VerifyWhereUniqueInput, {nullable:true})
    cursor?: VerifyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [VerifyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof VerifyScalarFieldEnum>;
}
