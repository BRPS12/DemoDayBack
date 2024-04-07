import {
  registerAdmin,
  requestAdminLogin,
  updateAdmin,
} from "@/services/admin-service";
export const adminMutations = {
  registerAdmin: (
    _: unknown,
    {
      input,
    }: {
      input: {
        email: string;
        password: string;
        image: string;
        name: string;
        phoneNumber: number;
        specialCode: number;
      };
    }
  ) => registerAdmin(input),
  requestAdminLogin: (
    _: unknown,
    {
      email,
      password,
      specialCode,
    }: { email: string; password: string; specialCode: number }
  ) => requestAdminLogin(email, password, specialCode),
  updateAdmin: (
    _: unknown,
    {
      name,
      password,
      image,
      id,
    }: {
      password: string;
      image: string;
      name: string;
      id: string;
    }
  ) => updateAdmin(name, password, image, id),
};
