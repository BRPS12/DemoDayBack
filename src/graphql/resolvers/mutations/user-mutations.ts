import {
  registerUser,
  requestLogin,
  updateUser,
} from "@/services/user-service";

export const userMutations = {
  registerUser: (
    _: unknown,
    {
      input,
    }: {
      input: {
        email: string;
        password: string;
        image: string;
        name: string;
        age: number;
        phoneNumber: number;
        role: string;
      };
    }
  ) => registerUser(input),
  requestLogin: (
    _: unknown,
    { email, password }: { email: string; password: string }
  ) => requestLogin(email, password),
  updateUser: (
    _: unknown,
    {
      name,
      password,
      image,
      age,
      id,
    }: {
      password: string;
      image: string;
      name: string;
      id: string;
      age: number;
    }
  ) => updateUser(name, password, image, age, id),
};
