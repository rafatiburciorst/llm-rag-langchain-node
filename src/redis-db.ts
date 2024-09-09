import { createClient } from "redis";
import { env } from "./env.js";
import { OpenAIEmbeddings } from "@langchain/openai";
import { RedisVectorStore } from "@langchain/redis";

export const redis = createClient({
    url: env.REDIS_HOST
})

export const embeddings = new OpenAIEmbeddings()

await redis.connect()

const vectorStore = new RedisVectorStore(embeddings, {
    redisClient: redis,
    indexName: 'cat5',
    keyPrefix: 'def'
})

export {
    vectorStore
}

