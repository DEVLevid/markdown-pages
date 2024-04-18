import MainLayout from "./components/main-layout/main-layout";
import MarkdownProvider from "./providers/markdown-provider";

const App = () => (
  <MarkdownProvider>
    <MainLayout/>
  </MarkdownProvider>
);

export default App;
