import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutSettlementInput } from './user-create-without-settlement.input';
import { UserCreateOrConnectWithoutSettlementInput } from './user-create-or-connect-without-settlement.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutSettlementInput {

    @Field(() => UserCreateWithoutSettlementInput, {nullable:true})
    create?: UserCreateWithoutSettlementInput;

    @Field(() => UserCreateOrConnectWithoutSettlementInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutSettlementInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
