import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BuyerContactsWhereInput {

    @Field(() => [BuyerContactsWhereInput], {nullable:true})
    AND?: Array<BuyerContactsWhereInput>;

    @Field(() => [BuyerContactsWhereInput], {nullable:true})
    OR?: Array<BuyerContactsWhereInput>;

    @Field(() => [BuyerContactsWhereInput], {nullable:true})
    NOT?: Array<BuyerContactsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    walletId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    phoneNumber?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
