import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuyerContactsWhereUniqueInput } from './buyer-contacts-where-unique.input';

@ArgsType()
export class FindUniqueBuyerContactsArgs {

    @Field(() => BuyerContactsWhereUniqueInput, {nullable:false})
    where!: BuyerContactsWhereUniqueInput;
}
