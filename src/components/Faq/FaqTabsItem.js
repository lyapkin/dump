import s from "@/styles/faq.module.css";

export default function FaqTabsItem({ tab, index, active, onClick }) {
  return (
    <li
      className={`${s.filter} ${tab.id === active ? s.filter__active : ""}`}
      onClick={onClick}
    >
      {tab.name}
    </li>
  );
}
