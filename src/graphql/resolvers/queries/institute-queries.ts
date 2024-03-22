import { getInstitute, getInstitutes } from "@/services/institute-service";

export const instituteQueries = {
  getInstitutes: () => getInstitutes(),
  getInstitute: (_: unknown, { id }: { id: string }) => getInstitute(id),
};
