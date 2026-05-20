"use client";

import { Button } from "@/components/Button";
import { IMAGE_UPLOAD_MAX_SIZE } from "@/lib/constants";
import { ImageUp } from "lucide-react";
import { FC, useRef } from "react";
import { toast } from "react-toastify";

export const ImageUploader: FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  };

  const handleFileChange = () => {
    if (!fileInputRef.current) return;

    const file = fileInputRef.current.files?.[0];
    if (!file) return;

    if (file.type.split("/")[0] !== "image") {
      toast.error(
        "O arquivo selecionado não é uma imagem. Por favor, selecione um arquivo de imagem.",
      );

      fileInputRef.current.value = "";
      return;
    }

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      const readableSize = IMAGE_UPLOAD_MAX_SIZE / 1024;
      toast.error(
        `O arquivo selecionado é muito grande. O tamanho máximo permitido é de ${readableSize}KB.`,
      );

      fileInputRef.current.value = "";
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    // TODO: Criar action de upload de arquivo
    console.log("Arquivo selecionado:", formData);

    fileInputRef.current.value = "";
  };

  return (
    <div className="flex flex-col gap-2 items-start py-4">
      <Button type="button" onClick={handleClick}>
        <ImageUp />
        Upload Image
      </Button>
      <input
        ref={fileInputRef}
        className="hidden"
        type="file"
        name="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
};

