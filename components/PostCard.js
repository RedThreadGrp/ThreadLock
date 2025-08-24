export const COMPONENTS_POSTCARD_JS = `
import Link from 'next/link';


export default function PostCard({ post }) {
const { slug, title, excerpt, date, tags = [], cover, readingTime } = post;
return (
<article className="group rounded-2xl border border-gray-200 hover:border-gray-300 transition p-5 bg-white shadow-sm hover:shadow-md flex flex-col">
{cover ? (
// eslint-disable-next-line @next/next/no-img-element
<img src={cover} alt="" className="rounded-xl mb-4 w-full object-cover aspect-[16/9]" />
) : null}
<h3 className="text-xl font-semibold tracking-tight leading-snug">
<Link href={`/blog/${slug}`} className="hover:underline">
{title}
</Link>
</h3>
<div className="mt-2 text-sm text-gray-500 flex flex-wrap gap-x-3 gap-y-1 items-center">
<time dateTime={date}>{new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</time>
<span>•</span>
<span>{readingTime}</span>
{tags.length ? <>
<span>•</span>
<ul className="flex gap-2 flex-wrap">
{tags.map((t) => (
<li key={t} className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-700">{t}</li>
))}
</ul>
</> : null}
</div>
{excerpt ? <p className="mt-3 text-gray-700 leading-relaxed line-clamp-3">{excerpt}</p> : null}
<div className="mt-4">
<Link href={`/blog/${slug}`} className="text-orange-600 font-medium hover:underline">Read more →</Link>
</div>
</article>
);
}
`;
