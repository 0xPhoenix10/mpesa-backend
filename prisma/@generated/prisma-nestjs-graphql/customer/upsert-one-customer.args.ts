import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerWhereUniqueInput } from './customer-where-unique.input';
import { CustomerCreateInput } from './customer-create.input';
import { CustomerUpdateInput } from './customer-update.input';

@ArgsType()
export class UpsertOneCustomerArgs {

    @Field(() => CustomerWhereUniqueInput, {nullable:false})
    where!: CustomerWhereUniqueInput;

    @Field(() => CustomerCreateInput, {nullable:false})
    create!: CustomerCreateInput;

    @Field(() => CustomerUpdateInput, {nullable:false})
    update!: CustomerUpdateInput;
}
