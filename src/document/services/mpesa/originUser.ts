import { document } from '../../repositories/document.db';

export async function OriginUser(documentData) {
  const { name, documentId,  phoneNumber, email, requestDate, period } = documentData.user;
  const fromUser = await document.findOrCreateFrom({ name, documentId,  phoneNumber, email });

  const mpesaSummary = {
    requestDate,
    period,
    ...documentData.summary,
  };
  // Add mepsa details to user account
  document.addInfoToUser(fromUser._key, { mpesa: mpesaSummary });

  return fromUser;
}