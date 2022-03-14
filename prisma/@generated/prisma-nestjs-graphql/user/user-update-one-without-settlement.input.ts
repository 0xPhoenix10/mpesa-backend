import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSettlementInput } from './user-create-without-settlement.input';
import { UserCreateOrConnectWithoutSettlementInput } from './user-create-or-connect-without-settlement.input';
import { UserUpsertWithoutSettlementInput } from './user-upsert-without-settlement.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutSettlementInput } from './user-update-without-settlement.input';

@InputType()
export class UserUpdateOneWithoutSettlementInput {

    @Field(() => UserCreateWithoutSettlementInput, {nullable:true})
    create?: UserCreateWithoutSettlementInput;

    @Field(() => UserCreateOrConnectWithoutSettlementInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutSettlementInput;

    @Field(() => UserUpsertWithoutSettlementInput, {nullable:true})
    upsert?: UserUpsertWithoutSettlementInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutSettlementInput, {nullable:true})
    update?: UserUpdateWithoutSettlementInput;
}
