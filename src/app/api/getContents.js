// src/app/getContents.js
// import getContentSections from '@/backend/services/extractMarkdown.js';

export default function handler(req, res) {
    console.log('Fetching content sections...');
    res.status(200).json({
        success: true,
        data: [],
        error: null
    });
  // try {
  //   const sections = getContentSections();
  //   res.status(200).json({
  //     success: true,
  //     data: sections,
  //     error: null
  //   });
  // } catch (error) {
  //   res.status(500).json({
  //     success: false,
  //     data: null,
  //     error: error.message
  //   });
  // }
};