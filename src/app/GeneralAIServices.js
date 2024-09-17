import MarkdownContent from './MarkdownContent'; // Adjust the path as needed

const markdownContent = `
## Generative AI Services

**GPTChain:** We offer consulting and implementation services for GPTChain that include:

- **Prompt Tuning:** We use prompt engineering techniques and a vector database to tailor the model's responses to your specific needs.

- **Model Fine-tuning:** For applications expected to experience high demand or for clients looking to optimize costs, we offer a deeper level of customization. We train fine-tuned LLMs with your client-specific data, enhancing the precision and relevance of interactions and improving efficiency by reducing the number of tokens needed per interaction.

**On-Premise GPTChain Setup:** We also offer comprehensive setup and installation services for GPTChain. Whether it's on-premise or on your private or public cloud resources, we ensure that you can harness the power of GPTChain securely and effectively.

**Customized ChatGPT Plugin:** We extend consulting and implementation services to create customized ChatGPT plugins for businesses. Our team is equipped to tailor ChatGPT to specific industry needs, seamlessly integrate it into your existing platforms or applications, and optimize its performance. This ensures personalized and engaging conversational experiences for your customers, enhancing their interaction with your business.

**Customized Copilot for Apps:** Our consulting and implementation services also include creating customized copilots for apps. We can help businesses integrate intelligent assistant capabilities into their applications, providing users with smart suggestions, assistance, and guidance. By leveraging generative AI models, we enable enhanced user experiences and increased efficiency within the app workflow. 
`;

const GenerativeAIServices = (
  <MarkdownContent
    id="generative-ai-service-section"
    content={markdownContent}
  />
);

export default GenerativeAIServices;