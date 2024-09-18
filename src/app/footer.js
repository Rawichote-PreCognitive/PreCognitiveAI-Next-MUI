import MarkdownContent from './MarkdownContent';

const currentYear = new Date().getFullYear();

const footer = (  
  <MarkdownContent
    id="footer"
    content={`© ${currentYear} PreCognitive | This work is licensed under a Creative Commons Attribution 4.0 International License.`}
  />
);

export default footer;