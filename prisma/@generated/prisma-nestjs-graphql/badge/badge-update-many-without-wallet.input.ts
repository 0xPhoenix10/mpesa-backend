import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgeCreateWithoutWalletInput } from './badge-create-without-wallet.input';
import { BadgeCreateOrConnectWithoutWalletInput } from './badge-create-or-connect-without-wallet.input';
import { BadgeUpsertWithWhereUniqueWithoutWalletInput } from './badge-upsert-with-where-unique-without-wallet.input';
import { BadgeCreateManyWalletInputEnvelope } from './badge-create-many-wallet-input-envelope.input';
import { BadgeWhereUniqueInput } from './badge-where-unique.input';
import { BadgeUpdateWithWhereUniqueWithoutWalletInput } from './badge-update-with-where-unique-without-wallet.input';
import { BadgeUpdateManyWithWhereWithoutWalletInput } from './badge-update-many-with-where-without-wallet.input';
import { BadgeScalarWhereInput } from './badge-scalar-where.input';

@InputType()
export class BadgeUpdateManyWithoutWalletInput {

    @Field(() => [BadgeCreateWithoutWalletInput], {nullable:true})
    create?: Array<BadgeCreateWithoutWalletInput>;

    @Field(() => [BadgeCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<BadgeCreateOrConnectWithoutWalletInput>;

    @Field(() => [BadgeUpsertWithWhereUniqueWithoutWalletInput], {nullable:true})
    upsert?: Array<BadgeUpsertWithWhereUniqueWithoutWalletInput>;

    @Field(() => BadgeCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: BadgeCreateManyWalletInputEnvelope;

    @Field(() => [BadgeWhereUniqueInput], {nullable:true})
    set?: Array<BadgeWhereUniqueInput>;

    @Field(() => [BadgeWhereUniqueInput], {nullable:true})
    disconnect?: Array<BadgeWhereUniqueInput>;

    @Field(() => [BadgeWhereUniqueInput], {nullable:true})
    delete?: Array<BadgeWhereUniqueInput>;

    @Field(() => [BadgeWhereUniqueInput], {nullable:true})
    connect?: Array<BadgeWhereUniqueInput>;

    @Field(() => [BadgeUpdateWithWhereUniqueWithoutWalletInput], {nullable:true})
    update?: Array<BadgeUpdateWithWhereUniqueWithoutWalletInput>;

    @Field(() => [BadgeUpdateManyWithWhereWithoutWalletInput], {nullable:true})
    updateMany?: Array<BadgeUpdateManyWithWhereWithoutWalletInput>;

    @Field(() => [BadgeScalarWhereInput], {nullable:true})
    deleteMany?: Array<BadgeScalarWhereInput>;
}
