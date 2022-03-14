import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LoginWhereInput } from './login-where.input';
import { LoginOrderByWithAggregationInput } from './login-order-by-with-aggregation.input';
import { LoginScalarFieldEnum } from './login-scalar-field.enum';
import { LoginScalarWhereWithAggregatesInput } from './login-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LoginCountAggregateInput } from './login-count-aggregate.input';
import { LoginMinAggregateInput } from './login-min-aggregate.input';
import { LoginMaxAggregateInput } from './login-max-aggregate.input';

@ArgsType()
export class LoginGroupByArgs {

    @Field(() => LoginWhereInput, {nullable:true})
    where?: LoginWhereInput;

    @Field(() => [LoginOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LoginOrderByWithAggregationInput>;

    @Field(() => [LoginScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LoginScalarFieldEnum>;

    @Field(() => LoginScalarWhereWithAggregatesInput, {nullable:true})
    having?: LoginScalarWhereWithAggregatesInput;

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
