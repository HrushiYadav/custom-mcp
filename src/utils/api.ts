import fetch from 'node-fetch';

export async function fetchAPI({
  url,
  method,
  headers,
  body
}: {
  url: string;
  method: 'GET' | 'POST';
  headers?: Record<string, string>;
  body?: Record<string, any>;
}) {
  const res = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(headers || {})
    },
    body: method === 'POST' ? JSON.stringify(body) : undefined
  });

  const contentType = res.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return await res.json();
  } else {
    return await res.text();
  }
}
