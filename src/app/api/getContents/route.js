// src/app/api/getContents/route.js
import getContentSections from '../../../backend/services/extractMarkdown.js';

export async function GET(req, res) {
  console.log('Fetching content sections...');
  try {
    const sections = getContentSections();
    return new Response(JSON.stringify({
      success: true,
      data: sections,
      error: null
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      data: null,
      error: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}