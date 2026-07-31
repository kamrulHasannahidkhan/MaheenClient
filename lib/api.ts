export type Item = {
  _id: string;
  section: string;
  title: string;
  description: string;
  imageUrl: string;
};

export async function getItems(section: string): Promise<Item[]> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/items?section=${section}`,
      { cache: "no-store" }
    );
    if (!res.ok) return [];
    return res.json();
  } catch {
    return [];
  }
}
