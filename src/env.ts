import { z } from "zod";
import 'dotenv/config'

const envSchema = z.object({
    OPENAI_API_KEY: z.string(),
    REDIS_HOST: z.string()
})

const isValid = envSchema.safeParse(process.env)

if (!isValid.success) {
    console.error(isValid.error.flatten())
    throw new Error("Environment Variable not found")
}

const env = isValid.data

export {
    env
}