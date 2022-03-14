import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VisitWhereUniqueInput } from './visit-where-unique.input';
import { VisitCreateWithoutWalletInput } from './visit-create-without-wallet.input';

@InputType()
export class VisitCreateOrConnectWithoutWalletInput {

    @Field(() => VisitWhereUniqueInput, {nullable:false})
    where!: VisitWhereUniqueInput;

    @Field(() => VisitCreateWithoutWalletInput, {nullable:false})
    create!: VisitCreateWithoutWalletInput;
}
