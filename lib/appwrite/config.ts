export const appwriteConfig = {
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
  databaseId: process.env.NEXT_PUBLIC_APPWIRTE_DATABASE!,
  usersCollectionId: process.env.NEXT_PUBLIC_USERS_COLLECTION!,
  filesCollectionId: process.env.NEXT_PUBLIC_FILES_COLLECTION!,
  bucketCollectionId: process.env.NEXT_PUBLIC_BUCKER_COLLECTION!,
  secretKey: process.env.NEXT_SECRET!,
};
