// Utility function to ensure image URLs use HTTPS
export const ensureHttps = (url) => {
  if (!url) return url;
  return url.replace(/^http:/, 'https:');
};

export default ensureHttps;
