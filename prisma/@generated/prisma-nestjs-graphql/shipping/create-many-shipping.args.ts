import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ShippingCreateManyInput } from './shipping-create-many.input';

@ArgsType()
export class CreateManyShippingArgs {

    @Field(() => [ShippingCreateManyInput], {nullable:false})
    data!: Array<ShippingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
