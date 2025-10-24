/* eslint-disable */
export const LIB_POSTS_JS = `
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import readingTime from 'reading-time';


const postsDir = path.join(process.cwd(), 'content', 'blog');


export function getPostSlugs() {
if (!fs.existsSync(postsDir)) return [];
return fs
.readdirSync(postsDir)
.filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
.map((f) => f.replace(/\.(md|mdx)$/i, ''));
}


export function getAllPosts() {
const slugs = getPostSlugs();
const posts = slugs.map((slug) => getPostBySlug(slug, ['title','date','excerpt','author','tags','cover','draft','slug','readingTime']));
// newest first
return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}


export function getPostBySlug(slug, fields = []) {
const fullPathMd = path.join(postsDir, `${slug}.md`);
const fullPathMdx = path.join(postsDir, `${slug}.mdx`);
const fullPath = fs.existsSync(fullPathMd) ? fullPathMd : fullPathMdx;
const fileContents = fs.readFileSync(fullPath, 'utf8');
const { data, content } = matter(fileContents);;


const stats = readingTime(content || '');

const item = {};
fields.forEach((field) => {
if (field === 'slug') item.slug = slug;
if (field === 'content') item.content = content;
if (typeof data[field] !== 'undefined') item[field] = data[field];
});
item.readingTime = item.readingTime || stats.text; // e.g., "4 min read"
return item;
}


export async function getPostHtml(content) {
// Markdown -> HTML using remark (MD) then run rehype to add anchors.
const processed = await remark().use(html).process(content);


const withAnchors = await unified()
.use(rehypeParse, { fragment: true })
.use(rehypeSlug)
.use(rehypeAutolinkHeadings, { behavior: 'wrap' })
.use(rehypeStringify)
.process(String(processed));


return String(withAnchors);
}
`;
