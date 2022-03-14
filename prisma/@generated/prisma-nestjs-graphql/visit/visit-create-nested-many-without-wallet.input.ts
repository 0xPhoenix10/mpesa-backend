import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VisitCreateWithoutWalletInput } from './visit-create-without-wallet.input';
import { VisitCreateOrConnectWithoutWalletInput } from './visit-create-or-connect-without-wallet.input';
import { VisitCreateManyWalletInputEnvelope } from './visit-create-many-wallet-input-envelope.input';
import { VisitWhereUniqueInput } from './visit-where-unique.input';

@InputType()
export class VisitCreateNestedManyWithoutWalletInput {

    @Field(() => [VisitCreateWithoutWalletInput], {nullable:true})
    create?: Array<VisitCreateWithoutWalletInput>;

    @Field(() => [VisitCreateOrConnectWithoutWalletInput], {nullable:true})
    connectOrCreate?: Array<VisitCreateOrConnectWithoutWalletInput>;

    @Field(() => VisitCreateManyWalletInputEnvelope, {nullable:true})
    createMany?: VisitCreateManyWalletInputEnvelope;

    @Field(() => [VisitWhereUniqueInput], {nullable:true})
    connect?: Array<VisitWhereUniqueInput>;
}
