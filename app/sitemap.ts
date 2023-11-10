export default async function sitemap() {
  const routes = ['', '/blog', '/guestbook'].map(
    (route) => ({
      url: `https://gmahesa.com${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes];
}
