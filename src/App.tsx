import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { Header, Footer, AlbumList } from "./components";

import "./tailwind.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Header />
        <main>
          <AlbumList />
        </main>
        <Footer />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
