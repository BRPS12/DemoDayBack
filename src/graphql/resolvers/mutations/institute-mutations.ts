import { changeStatus } from "./../../../services/institute-service";
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
        image: string[];
        review: string;
        position: string[];
        description: string;
        backGroundImage: string;
        userId: string;
      };
    }
  ) => createInstitute(input),
  changeStatus: (
    _: unknown,
    {
      id,
    }: {
      id: string;
    }
  ) => changeStatus(id),
};
