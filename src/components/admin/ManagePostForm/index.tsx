"use client";

import { MarkdownEditor } from "@/components/MarkdownEditor";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import ImageUploader from "../ImageUploader";

const ManagePostForm = () => {
  const [contentValue, setContentValue] = useState("");

  return (
    <div className="flex flex-col py-16 mx-auto text-center gap-4 ">
      <Input type="email" placeholder="email" label="asdfoijasdofij" />
      <ImageUploader />
      <MarkdownEditor
        labelText="conteudo"
        disabled={false}
        textAreaName="content"
        value={contentValue}
        setValue={setContentValue}
      />
    </div>
  );
};

export default ManagePostForm;
