import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { AlbumList } from "./components/album-list/album-list";
import Section from "./components/layout/section";
import Container from "./components/layout/container";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <header>
          <Section>
            <Container>
              <h1>Wizcode Music App</h1>
            </Container>
          </Section>
        </header>
        <main>
          <Section>
            <Container>
              <AlbumList />
            </Container>
          </Section>
        </main>
        <footer>
          <Section>
            <Container>
              <p>© 2023 by propbono</p>
            </Container>
          </Section>
        </footer>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

export default App;
