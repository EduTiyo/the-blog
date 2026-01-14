"use client";

import { uploadImageAction } from "@/actions/upload/upload-image-action";
import { showMessage } from "@/adapters/showMessage";
import SpinLoader from "@/components/SpinLoader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageUpIcon } from "lucide-react";
import { useRef, useState, useTransition } from "react";

type ImageUploaderProps = {
  disabled?: boolean;
};

const ImageUploader = ({ disabled = false }: ImageUploaderProps) => {
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

    const uploadMaxSize = Number(process.env.NEXT_PUBLIC_IMAGE_UPLOAD_MAX_SIZE);
    if (file.size > uploadMaxSize) {
      const readableMaxSize = uploadMaxSize / 1024;
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
        disabled={isUploading || disabled}
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
          {/* eslint-disable-next-line */}
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
        disabled={isUploading || disabled}
      />
    </div>
  );
};

export default ImageUploader;
