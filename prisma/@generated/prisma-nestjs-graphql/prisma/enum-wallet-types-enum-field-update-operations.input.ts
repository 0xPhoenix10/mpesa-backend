import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletTypesEnum } from './wallet-types.enum';

@InputType()
export class EnumWalletTypesEnumFieldUpdateOperationsInput {

    @Field(() => WalletTypesEnum, {nullable:true})
    set?: keyof typeof WalletTypesEnum;
}
