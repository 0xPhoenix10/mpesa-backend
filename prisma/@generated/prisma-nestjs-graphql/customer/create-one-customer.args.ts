import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerCreateInput } from './customer-create.input';

@ArgsType()
export class CreateOneCustomerArgs {

    @Field(() => CustomerCreateInput, {nullable:false})
    data!: CustomerCreateInput;
}
