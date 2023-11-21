import { getBlogPosts } from "@/utils/blog";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://gmahesa.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ['', '/blog', '/guestbook'].map((route) => ({
    url: `https://gmahesa.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogs];
}
