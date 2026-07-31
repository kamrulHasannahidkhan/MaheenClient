import { Item } from "@/lib/api";

export default function Hero({ items }: { items: Item[] }) {
  const slide = items[0];
  return (
    <section className="relative h-[420px] bg-black text-white flex items-center">
      {slide?.imageUrl && (
        <img
          src={slide.imageUrl}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      )}
      <div className="relative z-10 max-w-xl px-10">
        <p className="text-sm tracking-widest text-blue-300 mb-2">
          YOUR TRUSTED PARTNER IN QUALITY ACCESSORIES
        </p>
        <h1 className="text-4xl font-bold mb-4">{slide?.title || "Innovative Solutions for Every Need"}</h1>
        <p className="text-gray-200 mb-6">{slide?.description}</p>
        <div className="flex gap-4">
          <button className="bg-blue-600 px-5 py-2 rounded">Book A Call</button>
          <button className="border border-white px-5 py-2 rounded">Explore Now</button>
        </div>
      </div>
    </section>
  );
}
