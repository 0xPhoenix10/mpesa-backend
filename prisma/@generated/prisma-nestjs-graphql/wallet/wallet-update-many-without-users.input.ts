import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutUsersInput } from './wallet-create-without-users.input';
import { WalletCreateOrConnectWithoutUsersInput } from './wallet-create-or-connect-without-users.input';
import { WalletUpsertWithWhereUniqueWithoutUsersInput } from './wallet-upsert-with-where-unique-without-users.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithWhereUniqueWithoutUsersInput } from './wallet-update-with-where-unique-without-users.input';
import { WalletUpdateManyWithWhereWithoutUsersInput } from './wallet-update-many-with-where-without-users.input';
import { WalletScalarWhereInput } from './wallet-scalar-where.input';

@InputType()
export class WalletUpdateManyWithoutUsersInput {

    @Field(() => [WalletCreateWithoutUsersInput], {nullable:true})
    create?: Array<WalletCreateWithoutUsersInput>;

    @Field(() => [WalletCreateOrConnectWithoutUsersInput], {nullable:true})
    connectOrCreate?: Array<WalletCreateOrConnectWithoutUsersInput>;

    @Field(() => [WalletUpsertWithWhereUniqueWithoutUsersInput], {nullable:true})
    upsert?: Array<WalletUpsertWithWhereUniqueWithoutUsersInput>;

    @Field(() => [WalletWhereUniqueInput], {nullable:true})
    set?: Array<WalletWhereUniqueInput>;

    @Field(() => [WalletWhereUniqueInput], {nullable:true})
    disconnect?: Array<WalletWhereUniqueInput>;

    @Field(() => [WalletWhereUniqueInput], {nullable:true})
    delete?: Array<WalletWhereUniqueInput>;

    @Field(() => [WalletWhereUniqueInput], {nullable:true})
    connect?: Array<WalletWhereUniqueInput>;

    @Field(() => [WalletUpdateWithWhereUniqueWithoutUsersInput], {nullable:true})
    update?: Array<WalletUpdateWithWhereUniqueWithoutUsersInput>;

    @Field(() => [WalletUpdateManyWithWhereWithoutUsersInput], {nullable:true})
    updateMany?: Array<WalletUpdateManyWithWhereWithoutUsersInput>;

    @Field(() => [WalletScalarWhereInput], {nullable:true})
    deleteMany?: Array<WalletScalarWhereInput>;
}
