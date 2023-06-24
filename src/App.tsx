import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { AlbumList } from "./components/album-list/album-list";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AlbumList />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
