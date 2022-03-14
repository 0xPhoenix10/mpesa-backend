import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginWhereInput } from './login-where.input';
import { LoginOrderByWithRelationInput } from './login-order-by-with-relation.input';
import { LoginWhereUniqueInput } from './login-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LoginCountAggregateInput } from './login-count-aggregate.input';
import { LoginMinAggregateInput } from './login-min-aggregate.input';
import { LoginMaxAggregateInput } from './login-max-aggregate.input';

@ArgsType()
export class LoginAggregateArgs {

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

    @Field(() => LoginCountAggregateInput, {nullable:true})
    _count?: LoginCountAggregateInput;

    @Field(() => LoginMinAggregateInput, {nullable:true})
    _min?: LoginMinAggregateInput;

    @Field(() => LoginMaxAggregateInput, {nullable:true})
    _max?: LoginMaxAggregateInput;
}
