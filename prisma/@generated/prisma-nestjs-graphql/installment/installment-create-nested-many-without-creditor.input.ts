import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateWithoutCreditorInput } from './installment-create-without-creditor.input';
import { InstallmentCreateOrConnectWithoutCreditorInput } from './installment-create-or-connect-without-creditor.input';
import { InstallmentCreateManyCreditorInputEnvelope } from './installment-create-many-creditor-input-envelope.input';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';

@InputType()
export class InstallmentCreateNestedManyWithoutCreditorInput {

    @Field(() => [InstallmentCreateWithoutCreditorInput], {nullable:true})
    create?: Array<InstallmentCreateWithoutCreditorInput>;

    @Field(() => [InstallmentCreateOrConnectWithoutCreditorInput], {nullable:true})
    connectOrCreate?: Array<InstallmentCreateOrConnectWithoutCreditorInput>;

    @Field(() => InstallmentCreateManyCreditorInputEnvelope, {nullable:true})
    createMany?: InstallmentCreateManyCreditorInputEnvelope;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    connect?: Array<InstallmentWhereUniqueInput>;
}
