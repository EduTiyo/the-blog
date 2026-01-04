"use client";

import { deletePostAction } from "@/actions/post/delete-post-action";
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
    startTransition(async () => {
      const result = await deletePostAction(id);
      alert(`o result é ${result}`);
      onSuccess?.();
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
