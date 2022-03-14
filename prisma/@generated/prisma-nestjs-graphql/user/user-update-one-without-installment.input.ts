import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutInstallmentInput } from './user-create-without-installment.input';
import { UserCreateOrConnectWithoutInstallmentInput } from './user-create-or-connect-without-installment.input';
import { UserUpsertWithoutInstallmentInput } from './user-upsert-without-installment.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutInstallmentInput } from './user-update-without-installment.input';

@InputType()
export class UserUpdateOneWithoutInstallmentInput {

    @Field(() => UserCreateWithoutInstallmentInput, {nullable:true})
    create?: UserCreateWithoutInstallmentInput;

    @Field(() => UserCreateOrConnectWithoutInstallmentInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutInstallmentInput;

    @Field(() => UserUpsertWithoutInstallmentInput, {nullable:true})
    upsert?: UserUpsertWithoutInstallmentInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutInstallmentInput, {nullable:true})
    update?: UserUpdateWithoutInstallmentInput;
}
