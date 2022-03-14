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
import { AnswerUpdateManyWithoutAnsweredInput } from '../answer/answer-update-many-without-answered.input';
import { CreditUpdateManyWithoutAffiliateInput } from '../credit/credit-update-many-without-affiliate.input';
import { CreditUpdateManyWithoutUserInput } from '../credit/credit-update-many-without-user.input';
import { InstallmentUpdateManyWithoutUserInput } from '../installment/installment-update-many-without-user.input';
import { LoginUpdateManyWithoutUserInput } from '../login/login-update-many-without-user.input';
import { OrderUpdateManyWithoutAffiliateInput } from '../order/order-update-many-without-affiliate.input';
import { OrderUpdateManyWithoutUserInput } from '../order/order-update-many-without-user.input';
import { OtherMemberKYCUpdateManyWithoutCreatedByInput } from '../other-member-kyc/other-member-kyc-update-many-without-created-by.input';
import { ProductUpdateManyWithoutAffiliateInput } from '../product/product-update-many-without-affiliate.input';
import { SettlementUpdateManyWithoutSettlementCreatorInput } from '../settlement/settlement-update-many-without-settlement-creator.input';
import { UsersWalletsUpdateManyWithoutUserInput } from '../users-wallets/users-wallets-update-many-without-user.input';
import { VerifyUpdateManyWithoutUserInput } from '../verify/verify-update-many-without-user.input';
import { VisitUpdateManyWithoutVisitedInput } from '../visit/visit-update-many-without-visited.input';
import { WalletUpdateManyWithoutUsersInput } from '../wallet/wallet-update-many-without-users.input';
import { SettlementUpdateManyWithoutSettlementVerifierInput } from '../settlement/settlement-update-many-without-settlement-verifier.input';
import { CreditRequestUpdateOneWithoutUserInput } from '../credit-request/credit-request-update-one-without-user.input';

@InputType()
export class UserUpdateWithoutActivityInput {

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

    @Field(() => AnswerUpdateManyWithoutAnsweredInput, {nullable:true})
    answers?: AnswerUpdateManyWithoutAnsweredInput;

    @Field(() => CreditUpdateManyWithoutAffiliateInput, {nullable:true})
    creditsAffilate?: CreditUpdateManyWithoutAffiliateInput;

    @Field(() => CreditUpdateManyWithoutUserInput, {nullable:true})
    credits?: CreditUpdateManyWithoutUserInput;

    @Field(() => InstallmentUpdateManyWithoutUserInput, {nullable:true})
    installment?: InstallmentUpdateManyWithoutUserInput;

    @Field(() => LoginUpdateManyWithoutUserInput, {nullable:true})
    login?: LoginUpdateManyWithoutUserInput;

    @Field(() => OrderUpdateManyWithoutAffiliateInput, {nullable:true})
    ordersAffiliate?: OrderUpdateManyWithoutAffiliateInput;

    @Field(() => OrderUpdateManyWithoutUserInput, {nullable:true})
    orders?: OrderUpdateManyWithoutUserInput;

    @Field(() => OtherMemberKYCUpdateManyWithoutCreatedByInput, {nullable:true})
    otherMemberKYC?: OtherMemberKYCUpdateManyWithoutCreatedByInput;

    @Field(() => ProductUpdateManyWithoutAffiliateInput, {nullable:true})
    product?: ProductUpdateManyWithoutAffiliateInput;

    @Field(() => SettlementUpdateManyWithoutSettlementCreatorInput, {nullable:true})
    settlement?: SettlementUpdateManyWithoutSettlementCreatorInput;

    @Field(() => UsersWalletsUpdateManyWithoutUserInput, {nullable:true})
    usersWallets?: UsersWalletsUpdateManyWithoutUserInput;

    @Field(() => VerifyUpdateManyWithoutUserInput, {nullable:true})
    verify?: VerifyUpdateManyWithoutUserInput;

    @Field(() => VisitUpdateManyWithoutVisitedInput, {nullable:true})
    visit?: VisitUpdateManyWithoutVisitedInput;

    @Field(() => WalletUpdateManyWithoutUsersInput, {nullable:true})
    wallets?: WalletUpdateManyWithoutUsersInput;

    @Field(() => SettlementUpdateManyWithoutSettlementVerifierInput, {nullable:true})
    Settlement?: SettlementUpdateManyWithoutSettlementVerifierInput;

    @Field(() => CreditRequestUpdateOneWithoutUserInput, {nullable:true})
    creditRequests?: CreditRequestUpdateOneWithoutUserInput;
}
