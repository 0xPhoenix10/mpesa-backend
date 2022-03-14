import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingWhereInput } from './shipping-where.input';

@ArgsType()
export class DeleteManyShippingArgs {

    @Field(() => ShippingWhereInput, {nullable:true})
    where?: ShippingWhereInput;
}
