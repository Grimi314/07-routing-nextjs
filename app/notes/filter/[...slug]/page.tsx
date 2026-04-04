import { fetchCotegories } from "@/lib/api";
import NotesClient from "./Notes.client";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function NotesPage({ params }: Props) {
  const { slug } = await params;
  const notes = await fetchCotegories(slug);

  return <NotesClient notes={notes} tag={slug ?? "all"} />;
}
