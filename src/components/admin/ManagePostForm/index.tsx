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
import { updatePostAction } from "@/actions/post/update-post-action";

type ManagePostFormUpdateProps = {
  mode: "update";
  publicPost?: PublicPost;
};

type ManagePostFormCreateProps = {
  mode: "create";
};

type ManagePostFormProps =
  | ManagePostFormUpdateProps
  | ManagePostFormCreateProps;

const ManagePostForm = (props: ManagePostFormProps) => {
  const { mode } = props;

  let publicPost;
  if (mode === "update") {
    publicPost = props.publicPost;
  }

  const actionsMap = {
    update: updatePostAction,
    create: createPostAction,
  };

  const initialState = {
    formState: makePartialPublicPost(publicPost),
    errors: [],
  };
  const [state, action, isPending] = useActionState(
    actionsMap[mode],
    initialState
  );

  useEffect(() => {
    if (state.errors.length > 0) {
      showMessage.dismiss();
      state.errors.forEach((error) => showMessage.error(error));
    }
  }, [state.errors]);

  useEffect(() => {
    if (state.success) {
      showMessage.dismiss();
      showMessage.success("Post atualizado com sucesso.");
    }
  }, [state.success]);

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
          disabled={isPending}
        />

        <Input
          label="Título"
          type="text"
          name="title"
          placeholder="Título do post"
          disabled={isPending}
          defaultValue={formState.title}
        />

        <Input
          label="Excerto"
          type="text"
          name="excerpt"
          placeholder="Excerto do post"
          disabled={isPending}
          defaultValue={formState.excerpt}
        />

        <MarkdownEditor
          labelText="Conteúdo"
          disabled={isPending}
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
          disabled={isPending}
          defaultValue={formState.coverImageUrl}
        />

        <Checkbox
          label="Publicar?"
          name="published"
          disabled={isPending}
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
