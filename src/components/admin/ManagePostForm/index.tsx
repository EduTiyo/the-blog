"use client";

import { MarkdownEditor } from "@/components/MarkdownEditor";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ImageUploader from "../ImageUploader";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const ManagePostForm = () => {
  const [contentValue, setContentValue] = useState("");

  return (
    <form action="" className="mb-16">
      <div className="flex flex-col py-16 mx-auto text-center gap-4 ">
        <Input
          label="Autor"
          type="text"
          name="author"
          placeholder="Autor do post"
        />

        <Input
          label="Slug"
          type="text"
          name="slug"
          placeholder="Slug gerada automaticamente"
          readOnly
        />

        <Input
          label="Título"
          type="text"
          name="title"
          placeholder="Título do post"
        />

        <Input
          label="Excerto"
          type="text"
          name="excerpt"
          placeholder="Excerto do post"
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
        />

        <Checkbox label="Publicar?" name="published" />

        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
};

export default ManagePostForm;
