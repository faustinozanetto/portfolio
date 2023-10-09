import { createClient } from '@vercel/kv';
import { Ratelimit } from '@upstash/ratelimit';

export const kv = createClient({
  url: process.env.REDIS_REST_API_URL!,
  token: process.env.REDIS_REST_API_TOKEN!,
  automaticDeserialization: true,
});

export const MAX_REDIS_REQUESTS = 5;

export const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.fixedWindow(MAX_REDIS_REQUESTS, '60 s'),
});
