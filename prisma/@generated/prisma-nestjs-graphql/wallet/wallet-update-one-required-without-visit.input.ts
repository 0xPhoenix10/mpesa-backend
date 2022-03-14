import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateWithoutVisitInput } from './wallet-create-without-visit.input';
import { WalletCreateOrConnectWithoutVisitInput } from './wallet-create-or-connect-without-visit.input';
import { WalletUpsertWithoutVisitInput } from './wallet-upsert-without-visit.input';
import { WalletWhereUniqueInput } from './wallet-where-unique.input';
import { WalletUpdateWithoutVisitInput } from './wallet-update-without-visit.input';

@InputType()
export class WalletUpdateOneRequiredWithoutVisitInput {

    @Field(() => WalletCreateWithoutVisitInput, {nullable:true})
    create?: WalletCreateWithoutVisitInput;

    @Field(() => WalletCreateOrConnectWithoutVisitInput, {nullable:true})
    connectOrCreate?: WalletCreateOrConnectWithoutVisitInput;

    @Field(() => WalletUpsertWithoutVisitInput, {nullable:true})
    upsert?: WalletUpsertWithoutVisitInput;

    @Field(() => WalletWhereUniqueInput, {nullable:true})
    connect?: WalletWhereUniqueInput;

    @Field(() => WalletUpdateWithoutVisitInput, {nullable:true})
    update?: WalletUpdateWithoutVisitInput;
}
