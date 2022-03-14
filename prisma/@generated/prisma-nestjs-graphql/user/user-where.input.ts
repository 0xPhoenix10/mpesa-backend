import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumCountryCodeNullableFilter } from '../prisma/enum-country-code-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { EnumGenderEnumNullableFilter } from '../prisma/enum-gender-enum-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { ActivityListRelationFilter } from '../activity/activity-list-relation-filter.input';
import { AnswerListRelationFilter } from '../answer/answer-list-relation-filter.input';
import { CreditListRelationFilter } from '../credit/credit-list-relation-filter.input';
import { InstallmentListRelationFilter } from '../installment/installment-list-relation-filter.input';
import { LoginListRelationFilter } from '../login/login-list-relation-filter.input';
import { OrderListRelationFilter } from '../order/order-list-relation-filter.input';
import { OtherMemberKYCListRelationFilter } from '../other-member-kyc/other-member-kyc-list-relation-filter.input';
import { ProductListRelationFilter } from '../product/product-list-relation-filter.input';
import { SettlementListRelationFilter } from '../settlement/settlement-list-relation-filter.input';
import { UsersWalletsListRelationFilter } from '../users-wallets/users-wallets-list-relation-filter.input';
import { VerifyListRelationFilter } from '../verify/verify-list-relation-filter.input';
import { VisitListRelationFilter } from '../visit/visit-list-relation-filter.input';
import { WalletListRelationFilter } from '../wallet/wallet-list-relation-filter.input';
import { CreditRequestRelationFilter } from '../credit-request/credit-request-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    userPhoto?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phoneNumber?: StringNullableFilter;

    @Field(() => EnumCountryCodeNullableFilter, {nullable:true})
    countryCode?: EnumCountryCodeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    url?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    pin?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    deviceToken?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    verified?: BoolFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    expoPushToken?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    inviterId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    faceIdImage?: StringNullableFilter;

    @Field(() => EnumCountryCodeNullableFilter, {nullable:true})
    documentCountry?: EnumCountryCodeNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    documentData?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentFirstName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentLastName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentImage?: StringNullableFilter;

    @Field(() => EnumGenderEnumNullableFilter, {nullable:true})
    documentGender?: EnumGenderEnumNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    documentDateOfBirth?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    documentDateOfIssue?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    documentSerialNumber?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    documentCreatedAt?: DateTimeNullableFilter;

    @Field(() => ActivityListRelationFilter, {nullable:true})
    activity?: ActivityListRelationFilter;

    @Field(() => AnswerListRelationFilter, {nullable:true})
    answers?: AnswerListRelationFilter;

    @Field(() => CreditListRelationFilter, {nullable:true})
    creditsAffilate?: CreditListRelationFilter;

    @Field(() => CreditListRelationFilter, {nullable:true})
    credits?: CreditListRelationFilter;

    @Field(() => InstallmentListRelationFilter, {nullable:true})
    installment?: InstallmentListRelationFilter;

    @Field(() => LoginListRelationFilter, {nullable:true})
    login?: LoginListRelationFilter;

    @Field(() => OrderListRelationFilter, {nullable:true})
    ordersAffiliate?: OrderListRelationFilter;

    @Field(() => OrderListRelationFilter, {nullable:true})
    orders?: OrderListRelationFilter;

    @Field(() => OtherMemberKYCListRelationFilter, {nullable:true})
    otherMemberKYC?: OtherMemberKYCListRelationFilter;

    @Field(() => ProductListRelationFilter, {nullable:true})
    product?: ProductListRelationFilter;

    @Field(() => SettlementListRelationFilter, {nullable:true})
    settlement?: SettlementListRelationFilter;

    @Field(() => UsersWalletsListRelationFilter, {nullable:true})
    usersWallets?: UsersWalletsListRelationFilter;

    @Field(() => VerifyListRelationFilter, {nullable:true})
    verify?: VerifyListRelationFilter;

    @Field(() => VisitListRelationFilter, {nullable:true})
    visit?: VisitListRelationFilter;

    @Field(() => WalletListRelationFilter, {nullable:true})
    wallets?: WalletListRelationFilter;

    @Field(() => SettlementListRelationFilter, {nullable:true})
    Settlement?: SettlementListRelationFilter;

    @Field(() => CreditRequestRelationFilter, {nullable:true})
    creditRequests?: CreditRequestRelationFilter;
}
