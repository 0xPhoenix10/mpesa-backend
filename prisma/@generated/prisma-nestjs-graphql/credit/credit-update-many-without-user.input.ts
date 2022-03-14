import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateWithoutUserInput } from './credit-create-without-user.input';
import { CreditCreateOrConnectWithoutUserInput } from './credit-create-or-connect-without-user.input';
import { CreditUpsertWithWhereUniqueWithoutUserInput } from './credit-upsert-with-where-unique-without-user.input';
import { CreditCreateManyUserInputEnvelope } from './credit-create-many-user-input-envelope.input';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithWhereUniqueWithoutUserInput } from './credit-update-with-where-unique-without-user.input';
import { CreditUpdateManyWithWhereWithoutUserInput } from './credit-update-many-with-where-without-user.input';
import { CreditScalarWhereInput } from './credit-scalar-where.input';

@InputType()
export class CreditUpdateManyWithoutUserInput {

    @Field(() => [CreditCreateWithoutUserInput], {nullable:true})
    create?: Array<CreditCreateWithoutUserInput>;

    @Field(() => [CreditCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<CreditCreateOrConnectWithoutUserInput>;

    @Field(() => [CreditUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<CreditUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => CreditCreateManyUserInputEnvelope, {nullable:true})
    createMany?: CreditCreateManyUserInputEnvelope;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    set?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    disconnect?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    delete?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    connect?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<CreditUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [CreditUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<CreditUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [CreditScalarWhereInput], {nullable:true})
    deleteMany?: Array<CreditScalarWhereInput>;
}
