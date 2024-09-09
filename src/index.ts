import { ChatOpenAI } from "@langchain/openai";
import { env } from "./env.js";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { vectorStore } from "./redis-db.js";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";

const llm = new ChatOpenAI({
    apiKey: env.OPENAI_API_KEY,
    model: 'gpt-4o-mini',
    maxTokens: 200,
    temperature: 0.3
})

const retriever = vectorStore.asRetriever();

const SYSTEM = `
Você é um especialista que analise defeitos em pás eólicas.
Você deve responder apenas perguntas relacionadas a defeitos de pás eólicas baseadas no contexto abaixo.
contex:
{context}
`.trim()

const prompt = ChatPromptTemplate.fromMessages([
    ["system", SYSTEM],
    ["human", "{input}"]
])

const questionAnswerChain = await createStuffDocumentsChain({ llm, prompt })
const ragChain = await createRetrievalChain({
    retriever,
    combineDocsChain: questionAnswerChain,
});

const results = await ragChain.invoke({
    input: "existem delaminações na pá eólica?",
});

console.log(results.answer);