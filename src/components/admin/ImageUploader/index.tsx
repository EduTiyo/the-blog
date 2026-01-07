"use client";

import { uploadImageAction } from "@/actions/upload/upload-image-action";
import { showMessage } from "@/adapters/showMessage";
import SpinLoader from "@/components/SpinLoader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IMAGE_UPLOAD_MAX_SIZE } from "@/lib/constants";
import { ImageUpIcon } from "lucide-react";
import { useRef, useState, useTransition } from "react";

const ImageUploader = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState("");

  function handleChooseFile() {
    if (!fileInputRef.current) {
      setImgUrl("");
      return;
    }

    fileInputRef.current.click();
  }

  function handleChangeFile() {
    showMessage.dismiss();

    if (!fileInputRef.current) {
      setImgUrl("");
      return;
    }

    const fileInput = fileInputRef.current;
    const file = fileInput?.files?.[0];

    if (!file) {
      setImgUrl("");
      return;
    }

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      const readableMaxSize = IMAGE_UPLOAD_MAX_SIZE / 1024;
      showMessage.error(`A imagem deve ter menos de ${readableMaxSize}KB.`);

      fileInput.value = "";
      setImgUrl("");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        showMessage.error(result.error);
        setImgUrl("");
        fileInput.value = "";
        return;
      }

      setImgUrl(result.url);
    });

    fileInput.value = "";
  }

  return (
    <div className="flex flex-col gap-4 py-2">
      <Button
        onClick={handleChooseFile}
        type="button"
        variant="outline"
        className="self-start"
        disabled={isUploading}
      >
        <ImageUpIcon />
        Escolher um arquivo
        {isUploading && <SpinLoader containerClasses="w-5 h-5" />}
      </Button>

      {!!imgUrl && (
        <div className="flex flex-col gap-4">
          <p className="self-start">
            <b>URL: </b>
            {imgUrl}
          </p>
          <img className="rounded-lg" src={imgUrl} alt="url da imagem" />
        </div>
      )}

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
