import { getAdmins, getAdmin } from "@/services/admin-service";

export const adminQueries = {
  getAdmins: () => getAdmins(),
  getAdmin: (_: unknown, { id }: { id: string }) => getAdmin(id),
};
