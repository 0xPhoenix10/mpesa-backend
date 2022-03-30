import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuyerContactsUpdateManyMutationInput } from './buyer-contacts-update-many-mutation.input';
import { BuyerContactsWhereInput } from './buyer-contacts-where.input';

@ArgsType()
export class UpdateManyBuyerContactsArgs {

    @Field(() => BuyerContactsUpdateManyMutationInput, {nullable:false})
    data!: BuyerContactsUpdateManyMutationInput;

    @Field(() => BuyerContactsWhereInput, {nullable:true})
    where?: BuyerContactsWhereInput;
}
