import Link from "next/link";
import css from "./SidebarNotes.module.css";

export default async function SidebarNotes() {
  const tags = ["Todo", "Work", "Personal", "Meeting", "Shopping"];
  return (
    <ul className={css.menuList}>
      <li>
        <Link href={`/notes/filter/all`}>All notes</Link>
      </li>
      {tags.map((tag) => (
        <li key={tag}>
          <link href={`/notes/filter/${tag}`} className={css.menuLink} />
          {tag}
        </li>
      ))}
    </ul>
  );
}
