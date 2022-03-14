import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CustomerWhereInput } from './customer-where.input';

@InputType()
export class CustomerListRelationFilter {

    @Field(() => CustomerWhereInput, {nullable:true})
    every?: CustomerWhereInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    some?: CustomerWhereInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    none?: CustomerWhereInput;
}
