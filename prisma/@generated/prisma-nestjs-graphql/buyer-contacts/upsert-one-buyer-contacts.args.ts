import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuyerContactsWhereUniqueInput } from './buyer-contacts-where-unique.input';
import { BuyerContactsCreateInput } from './buyer-contacts-create.input';
import { BuyerContactsUpdateInput } from './buyer-contacts-update.input';

@ArgsType()
export class UpsertOneBuyerContactsArgs {

    @Field(() => BuyerContactsWhereUniqueInput, {nullable:false})
    where!: BuyerContactsWhereUniqueInput;

    @Field(() => BuyerContactsCreateInput, {nullable:false})
    create!: BuyerContactsCreateInput;

    @Field(() => BuyerContactsUpdateInput, {nullable:false})
    update!: BuyerContactsUpdateInput;
}
