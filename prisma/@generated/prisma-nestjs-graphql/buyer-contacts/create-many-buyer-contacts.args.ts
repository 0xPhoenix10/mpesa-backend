import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuyerContactsCreateManyInput } from './buyer-contacts-create-many.input';

@ArgsType()
export class CreateManyBuyerContactsArgs {

    @Field(() => [BuyerContactsCreateManyInput], {nullable:false})
    data!: Array<BuyerContactsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
