import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerCreateManyInput } from './customer-create-many.input';

@ArgsType()
export class CreateManyCustomerArgs {

    @Field(() => [CustomerCreateManyInput], {nullable:false})
    data!: Array<CustomerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
