import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VisitWhereUniqueInput } from './visit-where-unique.input';
import { VisitUpdateWithoutWalletInput } from './visit-update-without-wallet.input';

@InputType()
export class VisitUpdateWithWhereUniqueWithoutWalletInput {

    @Field(() => VisitWhereUniqueInput, {nullable:false})
    where!: VisitWhereUniqueInput;

    @Field(() => VisitUpdateWithoutWalletInput, {nullable:false})
    data!: VisitUpdateWithoutWalletInput;
}
