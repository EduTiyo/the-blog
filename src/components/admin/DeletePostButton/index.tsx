"use client";

import { deletePostAction } from "@/actions/post/delete-post-action";
import { showMessage } from "@/adapters/showMessage";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";

interface DeletePostButtonProps {
  id: string;
  title: string;
  onSuccess?: () => void;
}
export function DeletePostButton({
  id,
  title,
  onSuccess,
}: DeletePostButtonProps) {
  const [isPending, startTransition] = useTransition();

  async function handleClick() {
    showMessage.dismiss();
    startTransition(async () => {
      const result = await deletePostAction(id);

      if (result.error) {
        showMessage.error(result.error);
        return;
      }

      onSuccess?.();
      showMessage.success("Post deletado com sucesso");
    });
  }

  return (
    <>
      <Button
        className="w-full text-left disabled:cursor-not-allowed"
        aria-label={`Apagar post ${title}`}
        title={`Apagar post ${title}`}
        onClick={handleClick}
        disabled={isPending}
      >
        Excluir post
      </Button>
    </>
  );
}
