import { flattenObject } from '../../../helpers/flatten';
import { document } from '../../../user/user.db';
import { userNeoDocuments } from '../../../user/user.neo';

export async function OriginUser(documentData) {
  const { name, documentId,  phoneNumber, email, requestDate, period } = documentData.user;
  const fromUser = await userNeoDocuments.findOrCreateUser({ name, documentId,  phoneNumber, email });
  
  // const mpesaSummary = {
  //   requestDate,
  //   period,
  //   ...documentData.summary,
  // };

  return { ...fromUser, label: 'user' };
}