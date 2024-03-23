import { Header } from "@/components/header/header";

import { getTranslator } from "@/lib/translator";

export default function Home() {
  const t = getTranslator();

  return (
    <main className="flex justify-center py-8 px-24">
      <Header />
      <p>{t("home:test")}</p>
    </main>
  );
}
