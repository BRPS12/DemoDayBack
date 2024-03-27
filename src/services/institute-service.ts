import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";

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

    return updatedInstitute;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};
