"use server";

import {
  CreateUserSchema,
  PublicUserDto,
  PublicUserSchema,
} from "@/lib/user/schemas";
import { apiRequest } from "@/utils/api-request";
import { asyncDelay } from "@/utils/async-delay";
import { getZodErrorMessages } from "@/utils/get-zod-error-messages";
import { redirect } from "next/navigation";

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

  const createResponse = await apiRequest<PublicUserDto>("/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parsedFormData.data),
  });

  if (!createResponse.success) {
    return {
      user: PublicUserSchema.parse(formObj),
      errors: createResponse.errors,
      success: false,
    };
  }

  redirect("/login?created=1");
}
