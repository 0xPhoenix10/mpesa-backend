import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WalletCreateNestedOneWithoutVisitInput } from '../wallet/wallet-create-nested-one-without-visit.input';
import { UserCreateNestedOneWithoutVisitInput } from '../user/user-create-nested-one-without-visit.input';

@InputType()
export class VisitCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    visitedByReference?: string;

    @Field(() => Date, {nullable:true})
    whenVisitTookPlace?: Date | string;

    @Field(() => WalletCreateNestedOneWithoutVisitInput, {nullable:false})
    wallet!: WalletCreateNestedOneWithoutVisitInput;

    @Field(() => UserCreateNestedOneWithoutVisitInput, {nullable:true})
    visited?: UserCreateNestedOneWithoutVisitInput;
}
