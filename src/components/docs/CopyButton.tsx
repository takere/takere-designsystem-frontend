"use client";

import { Button, toast } from "@heroui/react";
import { CheckIcon, CopyIcon } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function CopyButton({ value, label, className }: { value: string; label?: string; className?: string }) {
  const t = useTranslations("common");
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast.success(t("copied"), { description: value, timeout: 2000 });
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.danger(t("copyFailed"));
    }
  };

  return (
    <Button isIconOnly size="sm" variant="ghost" aria-label={label ?? t("copy")} onPress={copy} className={className}>
      {copied ? <CheckIcon size={16} weight="bold" /> : <CopyIcon size={16} />}
    </Button>
  );
}
