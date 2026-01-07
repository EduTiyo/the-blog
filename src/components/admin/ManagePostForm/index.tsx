"use client";

import { MarkdownEditor } from "@/components/MarkdownEditor";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ImageUploader from "../ImageUploader";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { PublicPost } from "@/dto/post/dto";

type ManagePostFormProps = {
  publicPost?: PublicPost;
};

const ManagePostForm = ({ publicPost }: ManagePostFormProps) => {
  const [contentValue, setContentValue] = useState(publicPost?.content || "");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col mx-auto text-center gap-4 ">
        <Input
          label="Autor"
          type="text"
          name="author"
          placeholder="Autor do post"
          defaultValue={publicPost?.author || ""}
        />

        <Input
          label="Slug"
          type="text"
          name="slug"
          placeholder="Slug gerada automaticamente"
          readOnly
          defaultValue={publicPost?.slug || ""}
        />

        <Input
          label="Título"
          type="text"
          name="title"
          placeholder="Título do post"
          defaultValue={publicPost?.title || ""}
        />

        <Input
          label="Excerto"
          type="text"
          name="excerpt"
          placeholder="Excerto do post"
          defaultValue={publicPost?.excerpt || ""}
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
          defaultValue={publicPost?.coverImageUrl || ""}
        />

        <Checkbox
          label="Publicar?"
          name="published"
          defaultChecked={publicPost?.published || false}
        />

        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
};

export default ManagePostForm;
