import { userQueries } from "./queries/user-queries";
import { userMutations } from "./mutations/user-mutations";
import { instituteMutations } from "./mutations/institute-mutations";
import { instituteQueries } from "./queries/institute-queries";
import { adminQueries } from "./queries/admin-queries";
import { adminMutations } from "./mutations/admin-mutations";
export const resolvers = {
  Query: {
    ...userQueries,
    ...instituteQueries,
    ...adminQueries,
  },
  Mutation: {
    ...userMutations,
    ...instituteMutations,
    ...adminMutations,
  },
};
