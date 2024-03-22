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
  image: string;
  review: string;
  description: string;
  backGroundImage: string;
  specialCode: string;
}) => {
  try {
    const result = await prisma.institute.create({ data: input });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating user");
  }
};
