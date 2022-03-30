import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuyerContactsUpdateInput } from './buyer-contacts-update.input';
import { BuyerContactsWhereUniqueInput } from './buyer-contacts-where-unique.input';

@ArgsType()
export class UpdateOneBuyerContactsArgs {

    @Field(() => BuyerContactsUpdateInput, {nullable:false})
    data!: BuyerContactsUpdateInput;

    @Field(() => BuyerContactsWhereUniqueInput, {nullable:false})
    where!: BuyerContactsWhereUniqueInput;
}
