"use client";

import { uploadImageAction } from "@/actions/upload/upload-image-action";
import { Button } from "@/components/Button";
import { IMAGE_UPLOAD_MAX_SIZE } from "@/lib/constants";
import { ImageUp } from "lucide-react";
import { FC, useRef, useState, useTransition } from "react";
import { toast } from "react-toastify";

export const ImageUploader: FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, startTransition] = useTransition();
  const [imgUrl, setImgUrl] = useState<string>("");

  const handleClick = () => {
    if (!fileInputRef.current) return;

    fileInputRef.current.click();
  };

  const handleFileChange = () => {
    toast.dismiss();
    if (!fileInputRef.current) {
      setImgUrl("");
      return;
    }

    const fileInput = fileInputRef.current;
    const file = fileInputRef.current.files?.[0];
    if (!file) {
      setImgUrl("");
      return;
    }

    if (file.type.split("/")[0] !== "image") {
      toast.error(
        "O arquivo selecionado não é uma imagem. Por favor, selecione um arquivo de imagem.",
      );

      fileInputRef.current.value = "";
      setImgUrl("");
      return;
    }

    if (file.size > IMAGE_UPLOAD_MAX_SIZE) {
      const readableSize = IMAGE_UPLOAD_MAX_SIZE / 1024;
      toast.error(
        `O arquivo selecionado é muito grande. O tamanho máximo permitido é de ${readableSize}KB.`,
      );

      fileInputRef.current.value = "";
      setImgUrl("");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    startTransition(async () => {
      const result = await uploadImageAction(formData);

      if (result.error) {
        toast.error(`Erro ao enviar a imagem: ${result.error}`);
        fileInput.value = "";
        setImgUrl("");
        return;
      }

      setImgUrl(result.url);
      toast.success(`Imagem enviada com sucesso!`);
    });

    fileInput.value = "";
  };

  return (
    <div className="flex flex-col gap-4 items-start py-4">
      <Button type="button" onClick={handleClick} disabled={isUploading}>
        <ImageUp />
        Upload Image
      </Button>

      {!!imgUrl && (
        <div className="flex flex-col gap-4">
          <p>URL: {imgUrl}</p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imgUrl} alt="Uploaded" className="max-w-xs rounded-lg" />
        </div>
      )}

      <input
        ref={fileInputRef}
        className="hidden"
        type="file"
        name="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={isUploading}
      />
    </div>
  );
};

