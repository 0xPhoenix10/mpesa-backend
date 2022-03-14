import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CreditCreateWithoutCreditorInput } from './credit-create-without-creditor.input';
import { CreditCreateOrConnectWithoutCreditorInput } from './credit-create-or-connect-without-creditor.input';
import { CreditUpsertWithWhereUniqueWithoutCreditorInput } from './credit-upsert-with-where-unique-without-creditor.input';
import { CreditCreateManyCreditorInputEnvelope } from './credit-create-many-creditor-input-envelope.input';
import { CreditWhereUniqueInput } from './credit-where-unique.input';
import { CreditUpdateWithWhereUniqueWithoutCreditorInput } from './credit-update-with-where-unique-without-creditor.input';
import { CreditUpdateManyWithWhereWithoutCreditorInput } from './credit-update-many-with-where-without-creditor.input';
import { CreditScalarWhereInput } from './credit-scalar-where.input';

@InputType()
export class CreditUncheckedUpdateManyWithoutCreditorInput {

    @Field(() => [CreditCreateWithoutCreditorInput], {nullable:true})
    create?: Array<CreditCreateWithoutCreditorInput>;

    @Field(() => [CreditCreateOrConnectWithoutCreditorInput], {nullable:true})
    connectOrCreate?: Array<CreditCreateOrConnectWithoutCreditorInput>;

    @Field(() => [CreditUpsertWithWhereUniqueWithoutCreditorInput], {nullable:true})
    upsert?: Array<CreditUpsertWithWhereUniqueWithoutCreditorInput>;

    @Field(() => CreditCreateManyCreditorInputEnvelope, {nullable:true})
    createMany?: CreditCreateManyCreditorInputEnvelope;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    set?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    disconnect?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    delete?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditWhereUniqueInput], {nullable:true})
    connect?: Array<CreditWhereUniqueInput>;

    @Field(() => [CreditUpdateWithWhereUniqueWithoutCreditorInput], {nullable:true})
    update?: Array<CreditUpdateWithWhereUniqueWithoutCreditorInput>;

    @Field(() => [CreditUpdateManyWithWhereWithoutCreditorInput], {nullable:true})
    updateMany?: Array<CreditUpdateManyWithWhereWithoutCreditorInput>;

    @Field(() => [CreditScalarWhereInput], {nullable:true})
    deleteMany?: Array<CreditScalarWhereInput>;
}
