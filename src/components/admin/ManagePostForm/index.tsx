"use client";

import { MarkdownEditor } from "@/components/MarkdownEditor";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const ManagePostForm = () => {
  const [contentValue, setContentValue] = useState("");

  return (
    <div className="py-16 mx-auto text-center">
      <Input type="email" placeholder="email" label="asdfoijasdofij" />
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
