// src/backend/contents/extractMarkdown.js
import fs from 'fs';
import path from 'path';

const markdownFilePath = path.join(process.cwd(), 'src/backend/contents/mainPage.md');

const extractSectionsFromMarkdown = (markdownContent) => {
  const sections = [];
  const sectionPattern = /##\s+([^\n]+)\n([\s\S]+?)(?=##\s+|$)/g;
  const imagePattern = /!\[([^\]]*)\]\((.*?)\)/;
  const contentTypePattern = /<!--\s*(\w+)\s*-->/;

  let match;
  while ((match = sectionPattern.exec(markdownContent)) !== null) {
    const sectionTitle = match[1].trim();
    let sectionContent = `## ${sectionTitle}\n\n${match[2].trim()}`;
    
    // Extract image URL and alt text if present
    const imageMatch = imagePattern.exec(sectionContent);
    const imageUrl = imageMatch ? imageMatch[2] : null;
    const imageAlt = imageMatch ? imageMatch[1] : null;
    const contentTypeMatch = contentTypePattern.exec(sectionContent);
    

    // Remove the image markdown from the content
    sectionContent = sectionContent.replace(imagePattern, '');
    // Remove the content type remark markdown from the content
    sectionContent = sectionContent.replace(contentTypePattern, '');

    sections.push({
      section: sectionTitle.replace(/\s+/g, '-'), // Convert spaces to hyphens
      content: sectionContent.trim(),
      image: imageUrl,
      alt: imageAlt,
      contentType: contentTypeMatch ? contentTypeMatch[1] : 'default',
    });
  }

  return sections;
};


const getContentSections = () => {
  try {
    console.log(markdownFilePath);
    const markdownContent = fs.readFileSync(markdownFilePath, 'utf-8');
    const result = extractSectionsFromMarkdown(markdownContent);
    return result;
  } catch (error) {
    console.error(`Error reading markdown file: ${error}`);
    throw new Error('Error reading markdown contents file');
  }
};

export default getContentSections;

// console.log(JSON.stringify(result, null, 2));
