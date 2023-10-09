import { BlogPostReaction, BlogPostReactionAction } from '@modules/blog/types/blog.types';
import { kv, ratelimit } from '@modules/redis/lib/redis.lib';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const { slug } = params;

  const blogPostReactions = await kv.hgetall(`reactions:${slug}`);

  if (!blogPostReactions) return Response.json({ reactions: [] });

  const entries = Object.entries(blogPostReactions);
  const reactions: BlogPostReaction[] = entries.map(([emoji, value]) => ({ emoji, value: Number(value) }));

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

  const INCREMENT_VALUES: Record<BlogPostReactionAction, number> = {
    decrement: -1,
    increment: 1,
  };

  await kv.hincrby(`reactions:${slug}`, emoji, INCREMENT_VALUES[action]);

  return NextResponse.json({ message: 'Reaction added successfully!' });
}
