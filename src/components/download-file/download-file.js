import { useMarkdown } from '../../providers/markdown-provider';
import React from "react";

const DownloadFile = () => {
  const [markdown, setMarkdown] = useMarkdown();
  const downloadFile = () => {
    const link = document.createElement("a");
    const file = new Blob([markdown], { type: "text/plain" });
    link.href = URL.createObjectURL(file);
    link.download = "Untitled.md";
    link.click();
    URL.revokeObjectURL(link.href);
  };
  return <button onClick={downloadFile}>Download File</button>;
};

export default DownloadFile;
