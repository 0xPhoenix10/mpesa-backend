import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuyerContactsWhereInput } from './buyer-contacts-where.input';
import { BuyerContactsOrderByWithRelationInput } from './buyer-contacts-order-by-with-relation.input';
import { BuyerContactsWhereUniqueInput } from './buyer-contacts-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BuyerContactsScalarFieldEnum } from './buyer-contacts-scalar-field.enum';

@ArgsType()
export class FindManyBuyerContactsArgs {

    @Field(() => BuyerContactsWhereInput, {nullable:true})
    where?: BuyerContactsWhereInput;

    @Field(() => [BuyerContactsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BuyerContactsOrderByWithRelationInput>;

    @Field(() => BuyerContactsWhereUniqueInput, {nullable:true})
    cursor?: BuyerContactsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BuyerContactsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BuyerContactsScalarFieldEnum>;
}
