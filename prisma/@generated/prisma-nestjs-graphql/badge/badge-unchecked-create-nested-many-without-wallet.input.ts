import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgeCreateWithoutWalletInput } from './badge-create-without-wallet.input';
import { BadgeCreateOrConnectWithoutWalletInput } from './badge-create-or-connect-without-wallet.input';
import { BadgeCreateManyWalletInputEnvelope } from './badge-create-many-wallet-input-envelope.input';
import { BadgeWhereUniqueInput } from './badge-where-unique.input';

@InputType()
export class BadgeUncheckedCreateNestedManyWithoutWalletInput {

    @Field(() => [BadgeCreateWithoutWalletInput], {nullable:true})
    create?: Array<BadgeCreateWithoutWalletInput>;

    @Field(() => [BadgeCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<BadgeCreateOrConnectWithoutWalletInput>;

    @Field(() => BadgeCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: BadgeCreateManyWalletInputEnvelope;

    @Field(() => [BadgeWhereUniqueInput], {nullable:true})
    connect?: Array<BadgeWhereUniqueInput>;
}
