# Document Information Extraction & Semantic Search Application

This Node.js application extracts and stores information from documents in a vector database, allowing for efficient semantic search. It utilizes the OpenAI API to perform natural language queries and provides intelligent search results based on the stored data.

## Features

- **Document Information Extraction**: Reads and processes documents to extract relevant information.
- **Vector Database Storage**: Stores extracted data in vectors for efficient retrieval.
- **Semantic Search**: Uses semantic search techniques to match user queries with the stored information.
- **OpenAI Integration**: Leverages OpenAI's API to enhance the search and query response with language models.
- **LangChain Framework**: Built using the LangChain framework to streamline the interaction with the OpenAI API and facilitate complex query handling.

## Requirements

- Node.js
- LangChain Framework
- OpenAI API Key

## Setup

1. **Clone the repository**:

    ```bash
    git clone https://github.com/rafatiburciorst/llm-rag-langchain-node.git
    cd your-repo
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

    Create a `.env` file in the root directory and add your OpenAI API key.

    ```bash
    OPENAI_API_KEY=your_openai_api_key
    ```

4. **Run the application**:

    ```bash
    npm start
    ```

## Usage

1. **Upload Documents**: Add your documents to the specified folder or via API.
2. **Query Documents**: Use natural language queries to search the stored information.
3. **Retrieve Results**: Get semantically relevant results based on your query.

## Example Queries

- "What are the key points mentioned in the project report?"
- "Show me the repair costs for severe damages."
  
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements.

