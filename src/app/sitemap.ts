const getLastModified = async (path: string) => {
  return new Date();
};

export default async function sitemap() {
  const baseUrl = process.env.NEXT_BASE_URL;

  const paths = ["/"];

  const sitemapEntries = await Promise.all(
    paths.map(async (path) => {
      const lastModified = await getLastModified(path);
      return {
        url: `${baseUrl}${path}`,
        lastModified,
      };
    })
  );

  return sitemapEntries;
}
