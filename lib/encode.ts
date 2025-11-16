// Function to encode string to Base64 (using Buffer for universal compatibility)
export const safeBtoa = (str: string): string => {
  // Check if running in a browser-like environment (where Buffer might not be globally exposed but btoa is)
  if (typeof window !== 'undefined' && typeof window.btoa === 'function') {
    return btoa(str);
  }
  // Use Buffer on the server or if the environment supports it
  return Buffer.from(str, 'utf8').toString('base64');
};

// Function to decode Base64 string
export const base64UrlDecode = (b64url: string): string => {
  // 1. Restore Base64 non-safe characters: '-' -> '+' and '_' -> '/'
  let base64 = b64url.replace(/-/g, '+').replace(/_/g, '/');

  // 2. Restore padding '=' (Base64 length must be a multiple of 4)
  while (base64.length % 4) {
    base64 += '=';
  }

  // 3. Decode based on the environment
  if (typeof window !== 'undefined' && typeof atob === 'function') {
    // Client-side (Browser)
    try {
      return atob(base64);
    } catch (e) {
      console.error("Browser atob failed, string:", base64);
      throw e;
    }
  } else {
    // Server-side (Node.js/Next.js SSR)
    return Buffer.from(base64, 'base64').toString('utf8');
  }
};