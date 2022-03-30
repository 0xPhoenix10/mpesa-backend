import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuyerContactsWhereInput } from './buyer-contacts-where.input';

@ArgsType()
export class DeleteManyBuyerContactsArgs {

    @Field(() => BuyerContactsWhereInput, {nullable:true})
    where?: BuyerContactsWhereInput;
}
