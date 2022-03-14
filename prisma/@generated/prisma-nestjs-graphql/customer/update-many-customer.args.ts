import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CustomerUncheckedUpdateManyInput } from './customer-unchecked-update-many.input';
import { CustomerWhereInput } from './customer-where.input';

@ArgsType()
export class UpdateManyCustomerArgs {

    @Field(() => CustomerUncheckedUpdateManyInput, {nullable:false})
    data!: CustomerUncheckedUpdateManyInput;

    @Field(() => CustomerWhereInput, {nullable:true})
    where?: CustomerWhereInput;
}
