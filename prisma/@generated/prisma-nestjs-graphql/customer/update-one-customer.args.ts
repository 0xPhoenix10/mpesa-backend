import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerUpdateInput } from './customer-update.input';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';

@ArgsType()
export class UpdateOneCustomerArgs {

    @Field(() => CustomerUpdateInput, {nullable:false})
    data!: CustomerUpdateInput;

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: CustomerWhereUniqueInput;
}
