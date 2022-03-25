import { prismaClient } from '../../prisma/auth';


export const userPrisma = {
  getUserFromPhoneNumber(phoneNumber: string) {
    // console.log('phoneNumber:', phoneNumber);
    return prismaClient.user.findFirst({ where: { phoneNumber } });
  },

};