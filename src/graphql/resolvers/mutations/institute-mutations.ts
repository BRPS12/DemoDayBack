import { comment } from "postcss";
import {
  createInstitute,
  changeStatus,
  deleteInstitute,
  addComment,
  deleteComment,
  addReview,
} from "@/services/institute-service";
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
  deleteInstitute: (
    _: unknown,
    {
      id,
    }: {
      id: string;
    }
  ) => deleteInstitute(id),
  addComment: (
    _: unknown,
    {
      id,
      comment,
    }: {
      id: string;
      comment: string;
    }
  ) => addComment(id, comment),
  deleteComment: (
    _: unknown,
    {
      id,
      comment,
    }: {
      id: string;
      comment: string;
    }
  ) => deleteComment(id, comment),
  addReview: (
    _: unknown,
    {
      id,
      review,
    }: {
      id: string;
      review: number;
    }
  ) => addReview(id, review),
};
