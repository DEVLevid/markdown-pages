import React, { useState } from "react";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import DownloadFile from "../download-file/download-file";
import "./main-layout.css";

const MainLayout = () => {
  const [tab, setTab] = useState("editor");

  const handleTabClick = (selectedTab) => {
    setTab(selectedTab);
  };

  return (
    <main className="mainLayout">
      <h4 className="title-page">Adicionar comentário</h4>
      <div className="page">
        <div className="tabs">
          <button
            onClick={() => handleTabClick("editor")}
            className={`btn-editor ${tab === "editor" ? "active" : ""}`}
          >
            Escrever
          </button>
          <button
            onClick={() => handleTabClick("preview")}
            className={`btn-preview ${tab === "preview" ? "active" : ""}`}
          >
            Pré-visualizar
          </button>
        </div>
        <div className="content">
          {tab === "editor" && <Editor />}
          {tab === "preview" && <Preview />}
        </div>
      </div>
      <div className="download-btn">
        <DownloadFile />
      </div>
    </main>
  );
};

export default MainLayout;
