import { getBlogPostReactionsFromRedis, updateBlogPostReactionToRedis } from '@modules/blog/actions/blog.actions';
import { BlogPostReactionAction } from '@modules/blog/types/blog.types';
import { ratelimit } from '@modules/redis/lib/redis.lib';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;

  const reactions = await getBlogPostReactionsFromRedis(slug);

  return NextResponse.json({ reactions });
}

export async function POST(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;

  const body = await request.json();
  const { emoji, action }: { action: BlogPostReactionAction; emoji: string } = body;

  if (!emoji || !action) return NextResponse.json({ message: 'Invalid request body!' }, { status: 400 });

  const ip = request.ip ?? '127.0.0.1';
  const { success } = await ratelimit.limit(ip);

  if (!success) {
    return NextResponse.json({ message: 'Too many requests' }, { status: 429 });
  }

  await updateBlogPostReactionToRedis(slug, action, emoji);

  return NextResponse.json({ message: 'Reaction added successfully!' });
}
