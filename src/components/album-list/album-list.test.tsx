import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { AlbumList } from "./album-list";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import { ITUNES_URL } from "../../services/itunes/itunes-service";
import { server } from "../../mocks/server";
import { rest } from "msw";

const queryCache = new QueryCache();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

afterEach(() => {
  queryCache.clear();
});

describe("album list component tests", async () => {
  it("should have a title", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <AlbumList />
        </RecoilRoot>
      </QueryClientProvider>
    );

    const h2 = screen.getByText("Top Albums");

    expect(h2).toBeInTheDocument();
  });

  it("should render an album list", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <AlbumList />
        </RecoilRoot>
      </QueryClientProvider>
    );

    const album1 = await screen.findByText("chemistry");

    const album2 = await screen.findByText(
      "Mystical Magical Rhythmical Radical Ride"
    );

    expect(album1).toBeInTheDocument();
    expect(album2).toBeInTheDocument();
  });

  it("should display error message when fetch throws error", async () => {
    server.use(
      rest.get(ITUNES_URL, async (_, res, ctx) => {
        return res(ctx.status(500), ctx.json({ message: "Error" }));
      })
    );

    render(
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <AlbumList />
        </RecoilRoot>
      </QueryClientProvider>
    );

    const errorMessage = await screen.findByText(
      "Failed to fetch albums. Please try again later."
    );

    expect(errorMessage).toBeInTheDocument();
  });
});
