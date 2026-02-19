import { buildWhatsAppLink } from "@/app/lib/utils";

type Props = {
  phoneE164: string; // пример: "996700123456"
  text: string;
  className?: string;
};

export default function WhatsAppButton({ phoneE164, text, className }: Props) {
  const href = buildWhatsAppLink(phoneE164, text);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        className ??
        "inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold bg-black text-white hover:opacity-90"
      }
    >
      Заказать в WhatsApp
    </a>
  );
}
