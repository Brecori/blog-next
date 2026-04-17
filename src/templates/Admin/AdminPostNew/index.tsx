"use client";

import { Button } from "@/components/Button";
import { InputCheckbox } from "@/components/InputCheckbox";
import { InputText } from "@/components/InputText";
import { MarkdownEditor } from "@/components/MarkdownEditor";
import { FC, useState } from "react";

export const AdminPostNewTemplate: FC = () => {
  const [contentValue, setContentValue] = useState("");

  return (
    <form action="">
      <div className="flex flex-col gap-6">
        <InputText labelText="Nome" placeholder="Digite algo..." />
        <InputText
          labelText="Sobrenome"
          placeholder="Digite algo..."
          disabled
        />
        <InputCheckbox labelText="Check" />
        <MarkdownEditor
          labelText="Conteúdo"
          disabled={false}
          textAreaName="content"
          value={contentValue}
          setValue={setContentValue}
        />

        <div className="mt-4">
          <Button type="submit">Enviar</Button>
        </div>
      </div>
    </form>
  );
};
