"use server";

import {
  CreateUserSchema,
  PublicUserDto,
  PublicUserSchema,
} from "@/lib/user/schemas";
import { asyncDelay } from "@/utils/async-delay";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";

type CreateUserActionState = {
  user: PublicUserDto;
  errors: string[];
  success: Boolean;
};

export async function createUserAction(
  state: CreateUserActionState,
  formData: FormData,
): Promise<CreateUserActionState> {
  await asyncDelay(1000);
  if (!(formData instanceof FormData)) {
    return {
      user: state.user,
      errors: ["Dados inválidos"],
      success: false,
    };
  }

  const formObj = Object.fromEntries(formData.entries());
  const parsedFormData = CreateUserSchema.safeParse(formObj);

  if (!parsedFormData.success) {
    const errors = getZodErrorMessages(parsedFormData.error);
    return {
      user: PublicUserSchema.parse(formObj),
      errors,
      success: false,
    };
  }

  const apiUrl = `${process.env.API_URL}/user` || "http://localhost:3001/user";

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parsedFormData.data),
    });

    const json = await response.json();

    if (!response.ok) {
      return {
        user: PublicUserSchema.parse(formObj),
        errors: json.message,
        success: false,
      };
    }

    return {
      user: PublicUserSchema.parse(formObj),
      errors: [],
      success: true,
    };
  } catch (e) {
    console.log(e);
    return {
      user: PublicUserSchema.parse(formObj),
      errors: ["Falha ao conectar-se ao servidor"],
      success: false,
    };
  }
}
