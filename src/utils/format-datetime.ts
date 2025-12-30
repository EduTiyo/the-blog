import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(rawDate: string): string {
  const date = new Date(rawDate);
  const formattedDate = format(date, "dd/MM/yyyy - hh:mm", { locale: ptBR });
  return formattedDate;
}

export function formatRelativeDate(rawDate: string): string {
  const date = new Date(rawDate);
  const formattedRelativeDate = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
  return formattedRelativeDate;
}

const rawDate = "2025-12-30T12:04:23.205Z";
const formattedRelativeDate = formatRelativeDate(rawDate);
console.log(formattedRelativeDate);
