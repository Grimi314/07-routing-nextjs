import type { Note } from "@/types/note";

type Props = {
  notes: Note[];
  tag: string;
};

export default async function NotesClient({ notes, tag }: Props) {
  return (
    <div>
      <h2>{tag === "all" ? "All notes" : `Tag: ${tag}`}</h2>

      <ul>
        {notes.map((note: Note) => (
          <li key={note.id}>
            <h3>{note.title}</h3>
            {note.content && <p>{note.content}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
