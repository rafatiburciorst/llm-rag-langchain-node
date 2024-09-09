import { CSVLoader } from "@langchain/community/document_loaders/fs/csv";
import { TokenTextSplitter } from "langchain/text_splitter";
import { join } from "node:path";
import { __diname } from './utils/dirname.js';
import { RedisVectorStore } from "@langchain/redis";
import { createClient } from "redis";
import { env } from "./env.js";
import { OpenAIEmbeddings } from "@langchain/openai";

const filepath = join(__diname, '..', '..', 'doc.csv')
const loader = new CSVLoader(filepath, { separator: ';' })

const docs = await loader.load()

const textSplitter = new TokenTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200
})

const redis = createClient({
    url: env.REDIS_HOST
})

await redis.connect()

const splitted = await textSplitter.splitDocuments(docs)


await RedisVectorStore.fromDocuments(
    splitted,
    new OpenAIEmbeddings({
        apiKey: env.OPENAI_API_KEY,
    }), {
    redisClient: redis,
    indexName: 'cat5',
    keyPrefix: 'def'
}
)

await redis.disconnect()

