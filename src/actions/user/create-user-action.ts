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

  return {
    user: state.user,
    errors: [],
    success: true,
  };
}
