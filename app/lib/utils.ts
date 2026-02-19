export function formatSom(value: number) {
  return new Intl.NumberFormat("ru-RU").format(value) + " c";
}

export function buildWhatsAppLink(phoneE164: string, text: string) {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${phoneE164}?text=${encoded}`;
}
