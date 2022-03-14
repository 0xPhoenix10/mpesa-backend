import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerWhereInput } from './customer-where.input';

@ArgsType()
export class DeleteManyCustomerArgs {

    @Field(() => CustomerWhereInput, {nullable:true})
    where?: CustomerWhereInput;
}
