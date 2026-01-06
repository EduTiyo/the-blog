"use client";

import { showMessage } from "@/adapters/showMessage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IMAGE_UPLOAD_MAX_SIZE } from "@/lib/constants";
import { ImageUpIcon } from "lucide-react";
import { useRef } from "react";

const ImageUploader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  function handleChooseFile() {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  }

  function handleChangeFile() {
    if (!fileInputRef.current) return;

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) return;

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOAD_MAX_SIZE / 1024;
      showMessage.error(`A imagem deve ter menos de ${readableMaxSize}KB.`);

      fileInput.value = "";
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    console.log(file);

    fileInput.value = "";
  }

  return (
    <div className="flex flex-col gap-2 py-2">
      <Button
        onClick={handleChooseFile}
        type="button"
        variant="outline"
        className="self-start"
      >
        <ImageUpIcon />
        Escolher um arquivo
      </Button>
      <Input
        onChange={handleChangeFile}
        ref={fileInputRef}
        className="hidden"
        type="file"
        name="file"
        accept="image/*"
      />
    </div>
  );
};

export default ImageUploader;
