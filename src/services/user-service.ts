import { prisma } from "@/utils/prisma";
import { GraphQLError } from "graphql";
import bcrypt from "bcryptjs";
export const getUsers = async () => {
  try {
    const result = await prisma.user.findMany();
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};

export const getUser = async (id: string) => {
  try {
    const result = await prisma.user.findUnique({ where: { id } });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error fetching users");
  }
};

export const registerUser = async (input: {
  email: string;
  password: string;
  image: string;
  name: string;
  age: number;
  phoneNumber: number;
}) => {
  try {
    if (input.password.length < 8) {
      throw new GraphQLError("Password must be at least 8 characters long");
    }
    const result = await prisma.user.create({
      data: { ...input, role: "normal" },
    });
    return result;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error creating user");
  }
};

export const requestLogin = async (email: string, password: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      throw new GraphQLError("User not found");
    }
    const isPasswordValid = user.password === password;
    console.log(user);
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

export const updateUser = async (
  name: string,
  password: string,
  image: string,
  age: number,
  id: string
) => {
  try {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new GraphQLError("User not found");
    }
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { name, password, image, age },
    });
    return updatedUser;
  } catch (error) {
    console.error(error);
    throw new GraphQLError("Error updating user");
  }
};
