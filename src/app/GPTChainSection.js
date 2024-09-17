import MarkdownContent from './MarkdownContent'; // Adjust the path as needed

const markdownContent = `
## GPTChain

Starting next month, accelerate your large language model (LLM) application development with GPTChain, a diagram-like, drag-and-drop UI built on the [LangChain](https://python.langchain.com/docs/get_started/introduction.html) LLM application development framework. GPTChain is a derivative of the trusted open-source tool Flowise, offering pre-built templates for no-code LLM application development. With GPTChain, you can experience a live view of your LLM apps and streamline the entire development process. Similar to Flowise, GPTChain utilizes [LangChain JS](https://js.langchain.com/docs) with TypeScript dialect for optimal performance and stability. Moreover, GPTChain seamlessly integrates with OpenAI APIs, Azure OpenAI services, and open-source models from HuggingFace. Embrace the simplicity and power of GPTChain to revolutionize your generative AI application development.

Open to everyone at no cost, GPTChain allows users to explore, create, and test their LLM apps. For subscribed users, deployment is made easy on the GPTChain platform. Simply copy the provided JavaScript code snippet and paste it into your main app to implement your LLM application seamlessly. Discover the future of generative AI application development with GPTChain.
`;

const GPTChainSection = (
  <MarkdownContent
    id="generative-ai-service-section"
    content={markdownContent}
    imgSrc={'/images/img01_GPTFlow.png'}
    imgAlt={'GPTChain'}
  />
);

export default GPTChainSection;