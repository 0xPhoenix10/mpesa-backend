import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { WalletRelationFilter } from '../wallet/wallet-relation-filter.input';

@InputType()
export class TrustWhereInput {

    @Field(() => [TrustWhereInput], {nullable:true})
    AND?: Array<TrustWhereInput>;

    @Field(() => [TrustWhereInput], {nullable:true})
    OR?: Array<TrustWhereInput>;

    @Field(() => [TrustWhereInput], {nullable:true})
    NOT?: Array<TrustWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    account?: StringFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    trustRating?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    score?: FloatNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => WalletRelationFilter, {nullable:true})
    Wallet?: WalletRelationFilter;
}
