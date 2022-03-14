import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VisitCreateManyWalletInput } from './visit-create-many-wallet.input';

@InputType()
export class VisitCreateManyWalletInputEnvelope {

    @Field(() => [VisitCreateManyWalletInput], {nullable:false})
    data!: Array<VisitCreateManyWalletInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
