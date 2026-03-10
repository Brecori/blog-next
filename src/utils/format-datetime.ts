import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDatetime = (rawDate: string): string => {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
};

export const formatRelativeDate = (rawDate: string): string => {
  const date = new Date(rawDate);

  return formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR,
  });
};
