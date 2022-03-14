import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletUpdateWithoutVisitInput } from './wallet-update-without-visit.input';
import { WalletCreateWithoutVisitInput } from './wallet-create-without-visit.input';

@InputType()
export class WalletUpsertWithoutVisitInput {

    @Field(() => WalletUpdateWithoutVisitInput, {nullable:false})
    update!: WalletUpdateWithoutVisitInput;

    @Field(() => WalletCreateWithoutVisitInput, {nullable:false})
    create!: WalletCreateWithoutVisitInput;
}
