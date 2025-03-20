import FaqContent from "@/components/Faq/FaqContent";
import FaqService from "@/services/FaqService";
import s from "@/styles/faq.module.css";

export default async function FAQ() {
  const items = await FaqService.faq();

  return (
    <div className={`first-screen ${s.faq}`}>
      <div className="container">
        <FaqContent items={items} />
      </div>
    </div>
  );
}
