import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCode } from '../prisma/country-code.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { GenderEnum } from '../prisma/gender.enum';
import { ActivityUncheckedCreateNestedManyWithoutUserInput } from '../activity/activity-unchecked-create-nested-many-without-user.input';
import { AnswerUncheckedCreateNestedManyWithoutAnsweredInput } from '../answer/answer-unchecked-create-nested-many-without-answered.input';
import { CreditUncheckedCreateNestedManyWithoutAffiliateInput } from '../credit/credit-unchecked-create-nested-many-without-affiliate.input';
import { CreditUncheckedCreateNestedManyWithoutUserInput } from '../credit/credit-unchecked-create-nested-many-without-user.input';
import { LoginUncheckedCreateNestedManyWithoutUserInput } from '../login/login-unchecked-create-nested-many-without-user.input';
import { OrderUncheckedCreateNestedManyWithoutAffiliateInput } from '../order/order-unchecked-create-nested-many-without-affiliate.input';
import { OrderUncheckedCreateNestedManyWithoutUserInput } from '../order/order-unchecked-create-nested-many-without-user.input';
import { OtherMemberKYCUncheckedCreateNestedManyWithoutCreatedByInput } from '../other-member-kyc/other-member-kyc-unchecked-create-nested-many-without-created-by.input';
import { ProductUncheckedCreateNestedManyWithoutAffiliateInput } from '../product/product-unchecked-create-nested-many-without-affiliate.input';
import { SettlementUncheckedCreateNestedManyWithoutSettlementCreatorInput } from '../settlement/settlement-unchecked-create-nested-many-without-settlement-creator.input';
import { UsersWalletsUncheckedCreateNestedManyWithoutUserInput } from '../users-wallets/users-wallets-unchecked-create-nested-many-without-user.input';
import { VerifyUncheckedCreateNestedManyWithoutUserInput } from '../verify/verify-unchecked-create-nested-many-without-user.input';
import { VisitUncheckedCreateNestedManyWithoutVisitedInput } from '../visit/visit-unchecked-create-nested-many-without-visited.input';
import { WalletUncheckedCreateNestedManyWithoutUsersInput } from '../wallet/wallet-unchecked-create-nested-many-without-users.input';
import { SettlementUncheckedCreateNestedManyWithoutSettlementVerifierInput } from '../settlement/settlement-unchecked-create-nested-many-without-settlement-verifier.input';
import { CreditRequestUncheckedCreateNestedOneWithoutUserInput } from '../credit-request/credit-request-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutInstallmentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    userPhoto?: string;

    @Field(() => String, {nullable:true})
    phoneNumber?: string;

    @Field(() => CountryCode, {nullable:true})
    countryCode?: keyof typeof CountryCode;

    @Field(() => String, {nullable:true})
    documentId?: string;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    pin?: string;

    @Field(() => String, {nullable:true})
    deviceToken?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    verified?: boolean;

    @Field(() => String, {nullable:true})
    expoPushToken?: string;

    @Field(() => String, {nullable:true})
    inviterId?: string;

    @Field(() => String, {nullable:true})
    faceIdImage?: string;

    @Field(() => CountryCode, {nullable:true})
    documentCountry?: keyof typeof CountryCode;

    @Field(() => GraphQLJSON, {nullable:true})
    documentData?: any;

    @Field(() => String, {nullable:true})
    documentFirstName?: string;

    @Field(() => String, {nullable:true})
    documentLastName?: string;

    @Field(() => String, {nullable:true})
    documentImage?: string;

    @Field(() => GenderEnum, {nullable:true})
    documentGender?: keyof typeof GenderEnum;

    @Field(() => Date, {nullable:true})
    documentDateOfBirth?: Date | string;

    @Field(() => Date, {nullable:true})
    documentDateOfIssue?: Date | string;

    @Field(() => String, {nullable:true})
    documentSerialNumber?: string;

    @Field(() => Date, {nullable:true})
    documentCreatedAt?: Date | string;

    @Field(() => ActivityUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    activity?: ActivityUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => AnswerUncheckedCreateNestedManyWithoutAnsweredInput, {nullable:true})
    answers?: AnswerUncheckedCreateNestedManyWithoutAnsweredInput;

    @Field(() => CreditUncheckedCreateNestedManyWithoutAffiliateInput, {nullable:true})
    creditsAffilate?: CreditUncheckedCreateNestedManyWithoutAffiliateInput;

    @Field(() => CreditUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    credits?: CreditUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => LoginUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    login?: LoginUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => OrderUncheckedCreateNestedManyWithoutAffiliateInput, {nullable:true})
    ordersAffiliate?: OrderUncheckedCreateNestedManyWithoutAffiliateInput;

    @Field(() => OrderUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => OtherMemberKYCUncheckedCreateNestedManyWithoutCreatedByInput, {nullable:true})
    otherMemberKYC?: OtherMemberKYCUncheckedCreateNestedManyWithoutCreatedByInput;

    @Field(() => ProductUncheckedCreateNestedManyWithoutAffiliateInput, {nullable:true})
    product?: ProductUncheckedCreateNestedManyWithoutAffiliateInput;

    @Field(() => SettlementUncheckedCreateNestedManyWithoutSettlementCreatorInput, {nullable:true})
    settlement?: SettlementUncheckedCreateNestedManyWithoutSettlementCreatorInput;

    @Field(() => UsersWalletsUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    usersWallets?: UsersWalletsUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => VerifyUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    verify?: VerifyUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => VisitUncheckedCreateNestedManyWithoutVisitedInput, {nullable:true})
    visit?: VisitUncheckedCreateNestedManyWithoutVisitedInput;

    @Field(() => WalletUncheckedCreateNestedManyWithoutUsersInput, {nullable:true})
    wallets?: WalletUncheckedCreateNestedManyWithoutUsersInput;

    @Field(() => SettlementUncheckedCreateNestedManyWithoutSettlementVerifierInput, {nullable:true})
    Settlement?: SettlementUncheckedCreateNestedManyWithoutSettlementVerifierInput;

    @Field(() => CreditRequestUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    creditRequests?: CreditRequestUncheckedCreateNestedOneWithoutUserInput;
}
