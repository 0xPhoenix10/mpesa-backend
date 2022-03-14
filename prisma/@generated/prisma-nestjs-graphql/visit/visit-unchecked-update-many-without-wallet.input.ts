import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VisitCreateWithoutWalletInput } from './visit-create-without-wallet.input';
import { VisitCreateOrConnectWithoutWalletInput } from './visit-create-or-connect-without-wallet.input';
import { VisitUpsertWithWhereUniqueWithoutWalletInput } from './visit-upsert-with-where-unique-without-wallet.input';
import { VisitCreateManyWalletInputEnvelope } from './visit-create-many-wallet-input-envelope.input';
import { VisitWhereUniqueInput } from './visit-where-unique.input';
import { VisitUpdateWithWhereUniqueWithoutWalletInput } from './visit-update-with-where-unique-without-wallet.input';
import { VisitUpdateManyWithWhereWithoutWalletInput } from './visit-update-many-with-where-without-wallet.input';
import { VisitScalarWhereInput } from './visit-scalar-where.input';

@InputType()
export class VisitUncheckedUpdateManyWithoutWalletInput {

    @Field(() => [VisitCreateWithoutWalletInput], {nullable:true})
    create?: Array<VisitCreateWithoutWalletInput>;

    @Field(() => [VisitCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<VisitCreateOrConnectWithoutWalletInput>;

    @Field(() => [VisitUpsertWithWhereUniqueWithoutWalletInput], {nullable:true})
    upsert?: Array<VisitUpsertWithWhereUniqueWithoutWalletInput>;

    @Field(() => VisitCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: VisitCreateManyWalletInputEnvelope;

    @Field(() => [VisitWhereUniqueInput], {nullable:true})
    set?: Array<VisitWhereUniqueInput>;

    @Field(() => [VisitWhereUniqueInput], {nullable:true})
    disconnect?: Array<VisitWhereUniqueInput>;

    @Field(() => [VisitWhereUniqueInput], {nullable:true})
    delete?: Array<VisitWhereUniqueInput>;

    @Field(() => [VisitWhereUniqueInput], {nullable:true})
    connect?: Array<VisitWhereUniqueInput>;

    @Field(() => [VisitUpdateWithWhereUniqueWithoutWalletInput], {nullable:true})
    update?: Array<VisitUpdateWithWhereUniqueWithoutWalletInput>;

    @Field(() => [VisitUpdateManyWithWhereWithoutWalletInput], {nullable:true})
    updateMany?: Array<VisitUpdateManyWithWhereWithoutWalletInput>;

    @Field(() => [VisitScalarWhereInput], {nullable:true})
    deleteMany?: Array<VisitScalarWhereInput>;
}
