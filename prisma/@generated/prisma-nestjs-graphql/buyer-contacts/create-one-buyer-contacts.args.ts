import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuyerContactsCreateInput } from './buyer-contacts-create.input';

@ArgsType()
export class CreateOneBuyerContactsArgs {

    @Field(() => BuyerContactsCreateInput, {nullable:false})
    data!: BuyerContactsCreateInput;
}
