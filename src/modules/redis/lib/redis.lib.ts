import { createClient } from '@vercel/kv';
import { Ratelimit } from '@upstash/ratelimit';

export const kv = createClient({
  url: process.env.REDIS_REST_API_URL!,
  token: process.env.REDIS_REST_API_TOKEN!,
});

export const ratelimit = new Ratelimit({
  redis: kv,
  limiter: Ratelimit.fixedWindow(1, '60 s'),
});
