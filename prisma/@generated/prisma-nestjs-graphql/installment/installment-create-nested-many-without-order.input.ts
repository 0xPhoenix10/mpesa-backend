import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateWithoutOrderInput } from './installment-create-without-order.input';
import { InstallmentCreateOrConnectWithoutOrderInput } from './installment-create-or-connect-without-order.input';
import { InstallmentCreateManyOrderInputEnvelope } from './installment-create-many-order-input-envelope.input';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';

@InputType()
export class InstallmentCreateNestedManyWithoutOrderInput {

    @Field(() => [InstallmentCreateWithoutOrderInput], {nullable:true})
    create?: Array<InstallmentCreateWithoutOrderInput>;

    @Field(() => [InstallmentCreateOrConnectWithoutOrderInput], {nullable:true})
    connectOrCreate?: Array<InstallmentCreateOrConnectWithoutOrderInput>;

    @Field(() => InstallmentCreateManyOrderInputEnvelope, {nullable:true})
    createMany?: InstallmentCreateManyOrderInputEnvelope;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    connect?: Array<InstallmentWhereUniqueInput>;
}
