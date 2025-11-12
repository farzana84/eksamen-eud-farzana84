{/*import Link from "next/link";
import Image from "next/image";
export default function ListingCard({ singleListing }) {
  const { id, title = "Text" } = singleListing || {};
  // const img = singleListing?.asset?.url || null;

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = singleListing?.asset?.url || null;
  const newUrl = baseUrl + url.slice("http://localhost:4000/api/v1".length);

  return (
    <Link
      href={`/item-detail/${id}`}
      className="block rounded-xl border border-gray-200 bg-[#95D6A4] transition-shadow hover:shadow-sm opacity-90 hover:opacity-100"
    >
      <div className="p-5">
        <div className="relative aspect-square rounded bg-gray-200 overflow-hidden">
          {img ? (
            <Image
              // src={img}
              src={newUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain w-full h-full"
            />
          ) : (
            <div className="grid h-full w-full place-items-center">
              <div className="h-12 w-12 opacity-40 border rounded" />
            </div>
          )}
        </div>
        <p className="mt-3 text-sm text-gray-900">{title}</p>
      </div>
    </Link>
  );
}
*/}


import Link from "next/link";
import Image from "next/image";
export default function ListingCard({ singleListing }) {
  const { id, title = "Text" } = singleListing || {};
  const img = singleListing?.asset?.url || null;
  return (
    <Link
      href={`/item-detail/${id}`}
      className="block rounded-xl border border-gray-200 bg-[#95D6A4] transition-shadow hover:shadow-sm opacity-90 hover:opacity-100"
    >
      <div className="p-5">
      <div className="relative aspect-square rounded bg-gray-200 overflow-hidden">
          {img ? (
            <Image
              src={img}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain w-full h-full"
            />
            ) : (
            <div className="grid h-full w-full place-items-center">
              <div className="h-12 w-12 opacity-40 border rounded" />
            </div>
          )}
        </div>
        <p className="mt-3 text-sm text-gray-900">{title}</p>
      </div>
    </Link>
  );
}

