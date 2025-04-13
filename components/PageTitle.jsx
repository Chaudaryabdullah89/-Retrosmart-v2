import React, { useEffect } from 'react';

const PageTitle = ({ title }) => {
  useEffect(() => {
    document.title = `${title} | Retro Smart`;
  }, [title]);

  return null;
};

export default PageTitle; 