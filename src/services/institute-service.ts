import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";

const falseArrays = [] as Array<any>;

export const getInstitutes = async () => {
  try {
    const result = await prisma.institute.findMany();
    console.log(falseArrays);
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
  review: string;
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
