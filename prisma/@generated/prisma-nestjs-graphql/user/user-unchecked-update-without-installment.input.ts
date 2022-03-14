import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableEnumCountryCodeFieldUpdateOperationsInput } from '../prisma/nullable-enum-country-code-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableEnumGenderEnumFieldUpdateOperationsInput } from '../prisma/nullable-enum-gender-enum-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { ActivityUncheckedUpdateManyWithoutUserInput } from '../activity/activity-unchecked-update-many-without-user.input';
import { AnswerUncheckedUpdateManyWithoutAnsweredInput } from '../answer/answer-unchecked-update-many-without-answered.input';
import { CreditUncheckedUpdateManyWithoutAffiliateInput } from '../credit/credit-unchecked-update-many-without-affiliate.input';
import { CreditUncheckedUpdateManyWithoutUserInput } from '../credit/credit-unchecked-update-many-without-user.input';
import { LoginUncheckedUpdateManyWithoutUserInput } from '../login/login-unchecked-update-many-without-user.input';
import { OrderUncheckedUpdateManyWithoutAffiliateInput } from '../order/order-unchecked-update-many-without-affiliate.input';
import { OrderUncheckedUpdateManyWithoutUserInput } from '../order/order-unchecked-update-many-without-user.input';
import { OtherMemberKYCUncheckedUpdateManyWithoutCreatedByInput } from '../other-member-kyc/other-member-kyc-unchecked-update-many-without-created-by.input';
import { ProductUncheckedUpdateManyWithoutAffiliateInput } from '../product/product-unchecked-update-many-without-affiliate.input';
import { SettlementUncheckedUpdateManyWithoutSettlementCreatorInput } from '../settlement/settlement-unchecked-update-many-without-settlement-creator.input';
import { UsersWalletsUncheckedUpdateManyWithoutUserInput } from '../users-wallets/users-wallets-unchecked-update-many-without-user.input';
import { VerifyUncheckedUpdateManyWithoutUserInput } from '../verify/verify-unchecked-update-many-without-user.input';
import { VisitUncheckedUpdateManyWithoutVisitedInput } from '../visit/visit-unchecked-update-many-without-visited.input';
import { WalletUncheckedUpdateManyWithoutUsersInput } from '../wallet/wallet-unchecked-update-many-without-users.input';
import { SettlementUncheckedUpdateManyWithoutSettlementVerifierInput } from '../settlement/settlement-unchecked-update-many-without-settlement-verifier.input';
import { CreditRequestUncheckedUpdateOneWithoutUserInput } from '../credit-request/credit-request-unchecked-update-one-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutInstallmentInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    userPhoto?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumCountryCodeFieldUpdateOperationsInput, {nullable:true})
    countryCode?: NullableEnumCountryCodeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    documentId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    url?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    email?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    pin?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    deviceToken?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    verified?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    expoPushToken?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    inviterId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    faceIdImage?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumCountryCodeFieldUpdateOperationsInput, {nullable:true})
    documentCountry?: NullableEnumCountryCodeFieldUpdateOperationsInput;

    @Field(() => GraphQLJSON, {nullable:true})
    documentData?: any;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    documentFirstName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    documentLastName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    documentImage?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableEnumGenderEnumFieldUpdateOperationsInput, {nullable:true})
    documentGender?: NullableEnumGenderEnumFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    documentDateOfBirth?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    documentDateOfIssue?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    documentSerialNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    documentCreatedAt?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => ActivityUncheckedUpdateManyWithoutUserInput, {nullable:true})
    activity?: ActivityUncheckedUpdateManyWithoutUserInput;

    @Field(() => AnswerUncheckedUpdateManyWithoutAnsweredInput, {nullable:true})
    answers?: AnswerUncheckedUpdateManyWithoutAnsweredInput;

    @Field(() => CreditUncheckedUpdateManyWithoutAffiliateInput, {nullable:true})
    creditsAffilate?: CreditUncheckedUpdateManyWithoutAffiliateInput;

    @Field(() => CreditUncheckedUpdateManyWithoutUserInput, {nullable:true})
    credits?: CreditUncheckedUpdateManyWithoutUserInput;

    @Field(() => LoginUncheckedUpdateManyWithoutUserInput, {nullable:true})
    login?: LoginUncheckedUpdateManyWithoutUserInput;

    @Field(() => OrderUncheckedUpdateManyWithoutAffiliateInput, {nullable:true})
    ordersAffiliate?: OrderUncheckedUpdateManyWithoutAffiliateInput;

    @Field(() => OrderUncheckedUpdateManyWithoutUserInput, {nullable:true})
    orders?: OrderUncheckedUpdateManyWithoutUserInput;

    @Field(() => OtherMemberKYCUncheckedUpdateManyWithoutCreatedByInput, {nullable:true})
    otherMemberKYC?: OtherMemberKYCUncheckedUpdateManyWithoutCreatedByInput;

    @Field(() => ProductUncheckedUpdateManyWithoutAffiliateInput, {nullable:true})
    product?: ProductUncheckedUpdateManyWithoutAffiliateInput;

    @Field(() => SettlementUncheckedUpdateManyWithoutSettlementCreatorInput, {nullable:true})
    settlement?: SettlementUncheckedUpdateManyWithoutSettlementCreatorInput;

    @Field(() => UsersWalletsUncheckedUpdateManyWithoutUserInput, {nullable:true})
    usersWallets?: UsersWalletsUncheckedUpdateManyWithoutUserInput;

    @Field(() => VerifyUncheckedUpdateManyWithoutUserInput, {nullable:true})
    verify?: VerifyUncheckedUpdateManyWithoutUserInput;

    @Field(() => VisitUncheckedUpdateManyWithoutVisitedInput, {nullable:true})
    visit?: VisitUncheckedUpdateManyWithoutVisitedInput;

    @Field(() => WalletUncheckedUpdateManyWithoutUsersInput, {nullable:true})
    wallets?: WalletUncheckedUpdateManyWithoutUsersInput;

    @Field(() => SettlementUncheckedUpdateManyWithoutSettlementVerifierInput, {nullable:true})
    Settlement?: SettlementUncheckedUpdateManyWithoutSettlementVerifierInput;

    @Field(() => CreditRequestUncheckedUpdateOneWithoutUserInput, {nullable:true})
    creditRequests?: CreditRequestUncheckedUpdateOneWithoutUserInput;
}
