"use client";

import { MarkdownEditor } from "@/components/MarkdownEditor";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect, useState } from "react";
import ImageUploader from "../ImageUploader";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { makePartialPublicPost, PublicPost } from "@/dto/post/dto";
import { createPostAction } from "@/actions/post/create-post-action";
import SpinLoader from "@/components/SpinLoader";
import { showMessage } from "@/adapters/showMessage";

type ManagePostFormProps = {
  publicPost?: PublicPost;
};

const ManagePostForm = ({ publicPost }: ManagePostFormProps) => {
  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };
  const [state, action, isPending] = useActionState(
    createPostAction,
    initialState
  );

  useEffect(() => {
    if (state.errors.length > 0) {
      showMessage.dismiss();
      state.errors.forEach((error) => showMessage.error(error));
    }
  }, [state.errors]);

  const { formState } = state;
  const [contentValue, setContentValue] = useState(publicPost?.content || "");

  return (
    <form action={action} className="mb-16">
      <div className="flex flex-col mx-auto text-center gap-4 ">
        <Input
          label="Autor"
          type="text"
          name="author"
          placeholder="Autor do post"
          defaultValue={formState.author}
        />

        <Input
          label="Slug"
          type="text"
          name="slug"
          placeholder="Slug gerada automaticamente"
          readOnly
          defaultValue={formState.slug}
        />

        <Input
          label="Título"
          type="text"
          name="title"
          placeholder="Título do post"
          defaultValue={formState.title}
        />

        <Input
          label="Excerto"
          type="text"
          name="excerpt"
          placeholder="Excerto do post"
          defaultValue={formState.excerpt}
        />

        <MarkdownEditor
          labelText="Conteúdo"
          disabled={false}
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
        />
        <ImageUploader />

        <Input
          label="URL da imagem de capa"
          type="text"
          name="coverImageUrl"
          placeholder="URL da imagem"
          defaultValue={formState.coverImageUrl}
        />

        <Checkbox
          label="Publicar?"
          name="published"
          defaultChecked={formState.published}
        />

        <Button type="submit" disabled={isPending}>
          Enviar
          {isPending && <SpinLoader containerClasses="w-5 h-5" />}
        </Button>
      </div>
    </form>
  );
};

export default ManagePostForm;
