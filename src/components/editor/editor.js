import { useMarkdown } from '../../providers/markdown-provider';
import './editor.css';

const Editor = () => {
  const [markdown, setMarkdown] = useMarkdown();

  const updateMarkdown = (event) => {
    const value = event.target.value;

    setMarkdown(value);
  };

  return (
    <div className="editor__wrap">
      <textarea
        className="editor"
        value={markdown}
        onChange={updateMarkdown}
        placeholder='Digite aqui...'
      />
    </div>
  );
}

export default Editor;