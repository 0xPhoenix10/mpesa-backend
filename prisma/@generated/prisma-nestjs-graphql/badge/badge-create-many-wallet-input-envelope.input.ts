import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BadgeCreateManyWalletInput } from './badge-create-many-wallet.input';

@InputType()
export class BadgeCreateManyWalletInputEnvelope {

    @Field(() => [BadgeCreateManyWalletInput], {nullable:false})
    data!: Array<BadgeCreateManyWalletInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
