import { prismaClient } from '../../../prisma/auth';


export const userPrisma = {
  getUserFromPhoneNumber(phoneNumber: string) {
    return prismaClient.user.findFirst({ where: { phoneNumber } });
  },

};