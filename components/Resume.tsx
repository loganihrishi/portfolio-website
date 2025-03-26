'use client';

import { useEffect, useState } from 'react';

const Resume = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true when the component mounts
    setLoaded(true);
  }, []);

  return (
    <div id="resume" className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      {loaded ? (
        <div>
          <h1 className="text-xl text-gray-700 dark:text-gray-300">Click below to view or download the resume:</h1>
          <a
            href="https://loganihrishi-resume.s3.us-east-1.amazonaws.com/Hrishi+Logani_Resume_S3.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-blue-500 hover:text-blue-700"
          >
            Open Resume in New Tab
          </a>
        </div>
      ) : (
        <h1 className="text-xl text-gray-700 dark:text-gray-300">Loading...</h1>
      )}
    </div>
  );
};

export default Resume;
