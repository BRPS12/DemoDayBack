import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";
import bcrypt from "bcryptjs";
export const getAdmins = async () => {
  try {
    const result = await prisma.admin.findMany();
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};

export const getAdmin = async (id: string) => {
  try {
    const result = await prisma.admin.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};

export const registerAdmin = async (input: {
  email: string;
  password: string;
  image: string;
  name: string;
  phoneNumber: string;
  specialCode: string;
}) => {
  try {
    const hashedPassword = await bcrypt.hash(input.password, 10);
    const userInput = { ...input, password: hashedPassword };

    const result = await prisma.admin.create({
      data: { ...userInput, role: "admin" },
    });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating user");
  }
};

export const requestLogin = async (
  email: string,
  password: string,
  specialCode: string
) => {
  try {
    const user = await prisma.admin.findUnique({
      where: { email, specialCode },
    });
    if (!user) {
      throw new GraphQLError("User not found");
    }
    const isPasswordValid = user.password === password;
    if (isPasswordValid) {
      console.log("Login successful");
      return user;
    } else {
      throw new GraphQLError("Password incorrent not found");
    }
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};
export default requestLogin;

export const updateAdmin = async (
  name: string,
  password: string,
  image: string,
  id: string
) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new GraphQLError("User not found");
    }
    const updatedUser = await prisma.admin.update({
      where: { id: user.id },
      data: { name, password, image },
    });
    return updatedUser;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error updating user");
  }
};
