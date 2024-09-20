// src/app/api/getContents/route.js
import getContentSections from '@/services/extractMarkdown.js';

export async function GET() {
  console.log('Fetching markdown contents ...');
  try {
    const sections = getContentSections();
    return new Response(JSON.stringify({
      success: true,
      data: sections,
      error: null
    }), {status: 200});
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      data: null,
      error: error.message
    }), {status: 500});
  }
}
