export const onRequestGet: PagesFunction = (context) => {
  const { request, env } = context;
  const url = new URL(request.url);
  url.pathname = "/blogs/[slug]";
  return env.ASSETS.fetch(url);
};
