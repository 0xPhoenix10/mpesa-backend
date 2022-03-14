import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateManyOrderInput } from './installment-create-many-order.input';

@InputType()
export class InstallmentCreateManyOrderInputEnvelope {

    @Field(() => [InstallmentCreateManyOrderInput], {nullable:false})
    data!: Array<InstallmentCreateManyOrderInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
