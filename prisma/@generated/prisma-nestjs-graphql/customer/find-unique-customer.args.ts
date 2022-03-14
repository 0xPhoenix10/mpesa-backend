import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@ArgsType()
export class FindUniqueCustomerArgs {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: CustomerWhereUniqueInput;
}
