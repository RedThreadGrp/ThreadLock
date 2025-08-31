// lib/ratelimit.js
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// Connect to the Redis instance provisioned by Vercel
export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

// Configure a rate limiter: 10 requests per minute per key
export const ratelimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(10, '1 m'),
})
