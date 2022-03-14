import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CountryCode } from '../prisma/country-code.enum';
import { GraphQLJSON } from 'graphql-type-json';
import { GenderEnum } from '../prisma/gender.enum';
import { ActivityCreateNestedManyWithoutUserInput } from '../activity/activity-create-nested-many-without-user.input';
import { AnswerCreateNestedManyWithoutAnsweredInput } from '../answer/answer-create-nested-many-without-answered.input';
import { CreditCreateNestedManyWithoutAffiliateInput } from '../credit/credit-create-nested-many-without-affiliate.input';
import { CreditCreateNestedManyWithoutUserInput } from '../credit/credit-create-nested-many-without-user.input';
import { InstallmentCreateNestedManyWithoutUserInput } from '../installment/installment-create-nested-many-without-user.input';
import { LoginCreateNestedManyWithoutUserInput } from '../login/login-create-nested-many-without-user.input';
import { OrderCreateNestedManyWithoutAffiliateInput } from '../order/order-create-nested-many-without-affiliate.input';
import { OtherMemberKYCCreateNestedManyWithoutCreatedByInput } from '../other-member-kyc/other-member-kyc-create-nested-many-without-created-by.input';
import { ProductCreateNestedManyWithoutAffiliateInput } from '../product/product-create-nested-many-without-affiliate.input';
import { SettlementCreateNestedManyWithoutSettlementCreatorInput } from '../settlement/settlement-create-nested-many-without-settlement-creator.input';
import { UsersWalletsCreateNestedManyWithoutUserInput } from '../users-wallets/users-wallets-create-nested-many-without-user.input';
import { VerifyCreateNestedManyWithoutUserInput } from '../verify/verify-create-nested-many-without-user.input';
import { VisitCreateNestedManyWithoutVisitedInput } from '../visit/visit-create-nested-many-without-visited.input';
import { WalletCreateNestedManyWithoutUsersInput } from '../wallet/wallet-create-nested-many-without-users.input';
import { SettlementCreateNestedManyWithoutSettlementVerifierInput } from '../settlement/settlement-create-nested-many-without-settlement-verifier.input';
import { CreditRequestCreateNestedOneWithoutUserInput } from '../credit-request/credit-request-create-nested-one-without-user.input';

@InputType()
export class UserCreateWithoutOrdersInput {

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

    @Field(() => ActivityCreateNestedManyWithoutUserInput, {nullable:true})
    activity?: ActivityCreateNestedManyWithoutUserInput;

    @Field(() => AnswerCreateNestedManyWithoutAnsweredInput, {nullable:true})
    answers?: AnswerCreateNestedManyWithoutAnsweredInput;

    @Field(() => CreditCreateNestedManyWithoutAffiliateInput, {nullable:true})
    creditsAffilate?: CreditCreateNestedManyWithoutAffiliateInput;

    @Field(() => CreditCreateNestedManyWithoutUserInput, {nullable:true})
    credits?: CreditCreateNestedManyWithoutUserInput;

    @Field(() => InstallmentCreateNestedManyWithoutUserInput, {nullable:true})
    installment?: InstallmentCreateNestedManyWithoutUserInput;

    @Field(() => LoginCreateNestedManyWithoutUserInput, {nullable:true})
    login?: LoginCreateNestedManyWithoutUserInput;

    @Field(() => OrderCreateNestedManyWithoutAffiliateInput, {nullable:true})
    ordersAffiliate?: OrderCreateNestedManyWithoutAffiliateInput;

    @Field(() => OtherMemberKYCCreateNestedManyWithoutCreatedByInput, {nullable:true})
    otherMemberKYC?: OtherMemberKYCCreateNestedManyWithoutCreatedByInput;

    @Field(() => ProductCreateNestedManyWithoutAffiliateInput, {nullable:true})
    product?: ProductCreateNestedManyWithoutAffiliateInput;

    @Field(() => SettlementCreateNestedManyWithoutSettlementCreatorInput, {nullable:true})
    settlement?: SettlementCreateNestedManyWithoutSettlementCreatorInput;

    @Field(() => UsersWalletsCreateNestedManyWithoutUserInput, {nullable:true})
    usersWallets?: UsersWalletsCreateNestedManyWithoutUserInput;

    @Field(() => VerifyCreateNestedManyWithoutUserInput, {nullable:true})
    verify?: VerifyCreateNestedManyWithoutUserInput;

    @Field(() => VisitCreateNestedManyWithoutVisitedInput, {nullable:true})
    visit?: VisitCreateNestedManyWithoutVisitedInput;

    @Field(() => WalletCreateNestedManyWithoutUsersInput, {nullable:true})
    wallets?: WalletCreateNestedManyWithoutUsersInput;

    @Field(() => SettlementCreateNestedManyWithoutSettlementVerifierInput, {nullable:true})
    Settlement?: SettlementCreateNestedManyWithoutSettlementVerifierInput;

    @Field(() => CreditRequestCreateNestedOneWithoutUserInput, {nullable:true})
    creditRequests?: CreditRequestCreateNestedOneWithoutUserInput;
}
