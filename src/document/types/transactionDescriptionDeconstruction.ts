import { NodeLabel } from './nodeLabel.enum';

enum Label {
  BANK = 'BANK',
  UTILITY = 'UTILITY',
}

export interface DescriptionDeconstructionUser {
  firstName?: string,
  lastName?: string,
  phoneNumber?: string
  label?: NodeLabel
}

export interface DescriptionDeconstructionAccount {
  name: string,
  label?: NodeLabel
  mpesaPhoneNumberSecret?: string
  mpesaTill? : number
  mpesaPaybill? : number
}

