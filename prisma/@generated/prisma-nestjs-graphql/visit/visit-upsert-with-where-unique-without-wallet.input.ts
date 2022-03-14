import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VisitWhereUniqueInput } from './visit-where-unique.input';
import { VisitUpdateWithoutWalletInput } from './visit-update-without-wallet.input';
import { VisitCreateWithoutWalletInput } from './visit-create-without-wallet.input';

@InputType()
export class VisitUpsertWithWhereUniqueWithoutWalletInput {

    @Field(() => VisitWhereUniqueInput, {nullable:false})
    where!: VisitWhereUniqueInput;

    @Field(() => VisitUpdateWithoutWalletInput, {nullable:false})
    update!: VisitUpdateWithoutWalletInput;

    @Field(() => VisitCreateWithoutWalletInput, {nullable:false})
    create!: VisitCreateWithoutWalletInput;
}
