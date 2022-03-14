import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InstallmentCreateWithoutUserInput } from './installment-create-without-user.input';
import { InstallmentCreateOrConnectWithoutUserInput } from './installment-create-or-connect-without-user.input';
import { InstallmentCreateManyUserInputEnvelope } from './installment-create-many-user-input-envelope.input';
import { InstallmentWhereUniqueInput } from './installment-where-unique.input';

@InputType()
export class InstallmentCreateNestedManyWithoutUserInput {

    @Field(() => [InstallmentCreateWithoutUserInput], {nullable:true})
    create?: Array<InstallmentCreateWithoutUserInput>;

    @Field(() => [InstallmentCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<InstallmentCreateOrConnectWithoutUserInput>;

    @Field(() => InstallmentCreateManyUserInputEnvelope, {nullable:true})
    createMany?: InstallmentCreateManyUserInputEnvelope;

    @Field(() => [InstallmentWhereUniqueInput], {nullable:true})
    connect?: Array<InstallmentWhereUniqueInput>;
}
