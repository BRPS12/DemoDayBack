import { createInstitute } from "@/services/institute-service";

export const instituteMutations = {
  createInstitute: (
    _: unknown,
    {
      input,
    }: {
      input: {
        category: string;
        name: string;
        image: string;
        review: string;
        description: string;
        backGroundImage: string;
        specialCode: string;
      };
    }
  ) => createInstitute(input),
};
