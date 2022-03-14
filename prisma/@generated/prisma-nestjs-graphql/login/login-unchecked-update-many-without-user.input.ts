import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LoginCreateWithoutUserInput } from './login-create-without-user.input';
import { LoginCreateOrConnectWithoutUserInput } from './login-create-or-connect-without-user.input';
import { LoginUpsertWithWhereUniqueWithoutUserInput } from './login-upsert-with-where-unique-without-user.input';
import { LoginCreateManyUserInputEnvelope } from './login-create-many-user-input-envelope.input';
import { LoginWhereUniqueInput } from './login-where-unique.input';
import { LoginUpdateWithWhereUniqueWithoutUserInput } from './login-update-with-where-unique-without-user.input';
import { LoginUpdateManyWithWhereWithoutUserInput } from './login-update-many-with-where-without-user.input';
import { LoginScalarWhereInput } from './login-scalar-where.input';

@InputType()
export class LoginUncheckedUpdateManyWithoutUserInput {

    @Field(() => [LoginCreateWithoutUserInput], {nullable:true})
    create?: Array<LoginCreateWithoutUserInput>;

    @Field(() => [LoginCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<LoginCreateOrConnectWithoutUserInput>;

    @Field(() => [LoginUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<LoginUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => LoginCreateManyUserInputEnvelope, {nullable:true})
    createMany?: LoginCreateManyUserInputEnvelope;

    @Field(() => [LoginWhereUniqueInput], {nullable:true})
    set?: Array<LoginWhereUniqueInput>;

    @Field(() => [LoginWhereUniqueInput], {nullable:true})
    disconnect?: Array<LoginWhereUniqueInput>;

    @Field(() => [LoginWhereUniqueInput], {nullable:true})
    delete?: Array<LoginWhereUniqueInput>;

    @Field(() => [LoginWhereUniqueInput], {nullable:true})
    connect?: Array<LoginWhereUniqueInput>;

    @Field(() => [LoginUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<LoginUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [LoginUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<LoginUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [LoginScalarWhereInput], {nullable:true})
    deleteMany?: Array<LoginScalarWhereInput>;
}
