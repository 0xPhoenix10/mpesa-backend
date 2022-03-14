import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutInstallmentInput } from './user-create-without-installment.input';
import { UserCreateOrConnectWithoutInstallmentInput } from './user-create-or-connect-without-installment.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutInstallmentInput {

    @Field(() => UserCreateWithoutInstallmentInput, {nullable:true})
    create?: UserCreateWithoutInstallmentInput;

    @Field(() => UserCreateOrConnectWithoutInstallmentInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutInstallmentInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
