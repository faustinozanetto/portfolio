import { incrementBlogPostViewToRedis } from '@modules/blog/actions/blog.actions';
import { kv } from '@modules/redis/lib/redis.lib';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;

  const ip = request.ip ?? '127.0.0.1';

  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip));
  const hash = Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  // Prevent people from increment multiple times and only allow one per day.
  const isNewPetition = await kv.set(['deduplicate', hash, slug].join(':'), true, {
    nx: true,
    ex: 24 * 60 * 60,
  });

  if (!isNewPetition) {
    return new NextResponse(null, { status: 202 });
  }

  await incrementBlogPostViewToRedis(slug);

  return new NextResponse(null, { status: 202 });
}
