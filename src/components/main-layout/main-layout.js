import React, { useState } from "react";
import Editor from "../editor/editor";
import Preview from "../preview/preview";
import DownloadFile from "../download-file/download-file";
import "./main-layout.css";

const MainLayout = () => {
  const [tab, setTab] = useState("editor");

  return (
    <main className="mainLayout">
      <h4 className="title-page">Adicionar comentário</h4>
      <div className="page">
        <div className="tabs">
          <button onClick={() => setTab("editor")} className="btn-editor">
            Escrever
          </button>
          <button onClick={() => setTab("preview")} className="btn-preview">
            Pré-visualizar
          </button>
        </div>
        <div className="content">
          {tab === "editor" && <Editor />}
          {tab === "preview" && <Preview />}
        </div>
      </div>
      <div className="download-btn">
      <DownloadFile/>
      </div>
    </main>
  );
};

export default MainLayout;

