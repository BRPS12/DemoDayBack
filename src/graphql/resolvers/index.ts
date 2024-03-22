import { userQueries } from "./queries/user-queries";
import { userMutations } from "./mutations/user-mutations";
import { instituteMutations } from "./mutations/institute-mutations";
import { instituteQueries } from "./queries/institute-queries";
export const resolvers = {
  Query: {
    ...userQueries,
    ...instituteQueries,
  },
  Mutation: {
    ...userMutations,
    ...instituteMutations,
  },
};
