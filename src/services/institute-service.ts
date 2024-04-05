import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";
import { comment } from "postcss";

const falseArrays = [] as Array<any>;

export const getInstitutes = async () => {
  try {
    const result = await prisma.institute.findMany();
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};

export const getInstitute = async (id: string) => {
  try {
    const result = await prisma.institute.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};

export const createInstitute = async (input: {
  category: string;
  name: string;
  image: string[];
  position: string[];
  description: string;
  backGroundImage: string;
  userId: string;
}) => {
  try {
    const user = await prisma.admin.findUnique({ where: { id: input.userId } });
    if (user?.role === "admin") {
      const result = await prisma.institute.create({ data: input });
      falseArrays.push(result);
      return result;
    } else {
      throw new GraphQLError("Not organization");
    }
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating institute");
  }
};

export const changeStatus = async (id: string) => {
  try {
    const institute = await prisma.institute.findUnique({ where: { id } });
    if (!institute) {
      throw new Error("Institute not found");
    }

    const updatedInstitute = await prisma.institute.update({
      where: { id },
      data: {
        pending: true,
      },
    });
    const index = falseArrays.findIndex((item) => item.id === id);
    if (index !== -1) {
      falseArrays.splice(index, 1);
      console.log("Updated falseArrays after removal:", falseArrays);
    }
    return updatedInstitute;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching institutes");
  }
};
export const deleteInstitute = async (id: string) => {
  try {
    const institute = prisma.institute.delete({ where: { id } });
    return institute;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error deleteing institutes");
  }
};
export const addComment = async (id: string, newComment: string) => {
  try {
    const institute = await prisma.institute.findUnique({
      where: { id },
      select: { comment: true },
    });
    if (!institute) {
      throw new Error("Institute not found");
    }
    const updatedComments = [...(institute?.comment || []), newComment];
    const updatedInstitute = await prisma.institute.update({
      where: { id },
      data: {
        comment: updatedComments,
      },
    });

    return updatedInstitute;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error updating institute's comments");
  }
};
export const deleteComment = async (id: string, commentToDelete: string) => {
  try {
    const institute = await prisma.institute.findUnique({
      where: { id },
      select: { comment: true },
    });
    if (!institute) {
      throw new Error("Institute not found");
    }
    const updatedComments = (institute.comment || []).filter(
      (comment) => comment !== commentToDelete
    );

    const updatedInstitute = await prisma.institute.update({
      where: { id },
      data: {
        comment: updatedComments,
      },
    });

    return updatedInstitute;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error updating institute's comments");
  }
};
export const addReview = async (id: string, newReview: number) => {
  try {
    const institute = await prisma.institute.findUnique({
      where: { id },
    });

    if (!institute) {
      throw new Error("Institute not found");
    }

    const currentReview = institute.review || 0; // Default to 0 if review is null
    const currentReviewCount = institute.reviewCount || 0; // Default to 0 if reviewCount is null

    const totalReview = currentReview * currentReviewCount + newReview;
    const newReviewCount = currentReviewCount + 1;
    const newAverageReview = totalReview / newReviewCount;

    const response = await prisma.institute.update({
      where: { id },
      data: {
        review: newAverageReview,
        reviewCount: newReviewCount,
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error adding institute's review");
  }
};
