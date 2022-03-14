import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginWhereInput } from './login-where.input';
import { LoginOrderByWithRelationInput } from './login-order-by-with-relation.input';
import { LoginWhereUniqueInput } from './login-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LoginScalarFieldEnum } from './login-scalar-field.enum';

@ArgsType()
export class FindManyLoginArgs {

    @Field(() => LoginWhereInput, {nullable:true})
    where?: LoginWhereInput;

    @Field(() => [LoginOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LoginOrderByWithRelationInput>;

    @Field(() => LoginWhereUniqueInput, {nullable:true})
    cursor?: LoginWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LoginScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LoginScalarFieldEnum>;
}
