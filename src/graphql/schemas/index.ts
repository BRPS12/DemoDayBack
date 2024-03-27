import mergeTypeDefs from "graphql-tools-merge-typedefs";
import { userTypeDefs } from "./user-schema";
import { instituteTypeDefs } from "./institute-schema";
import { adminTypeDefs } from "./admin-schema";

export const typeDefs = mergeTypeDefs([
  userTypeDefs,
  instituteTypeDefs,
  adminTypeDefs,
]);
