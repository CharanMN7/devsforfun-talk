import { Deck } from "@/components/deck";
import { slides } from "@/lib/slides";

export default function Page() {
  return <Deck slides={slides} />;
}
