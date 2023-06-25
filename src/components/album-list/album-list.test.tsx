import { describe, expect, it } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
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

const renderAlbumList = () => {
  render(
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <AlbumList />
      </RecoilRoot>
    </QueryClientProvider>
  );
};

describe("album list component tests", async () => {
  it("should have a title", () => {
    renderAlbumList();

    const h2 = screen.getByText("Top Albums");

    expect(h2).toBeInTheDocument();
  });

  it("should render an album list", async () => {
    renderAlbumList();

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

    renderAlbumList();

    const errorMessage = await screen.findByText(
      "Failed to fetch albums. Please try again later."
    );

    expect(errorMessage).toBeInTheDocument();
  });

  it("should render an album list with album and artist name", async () => {
    renderAlbumList();

    const album1 = await screen.findByText("chemistry");

    const album2 = await screen.findByText(
      "Mystical Magical Rhythmical Radical Ride"
    );

    const artist1 = await screen.findByText("Kelly Clarkson");
    const artist2 = await screen.findByText("Jason Mraz");

    expect(album1).toBeInTheDocument();
    expect(album2).toBeInTheDocument();

    expect(artist1).toBeInTheDocument();
    expect(artist2).toBeInTheDocument();
  });

  it("should filter album list based on search input", async () => {
    renderAlbumList();
    const searchInput = screen.getByPlaceholderText("Search Albums");
    fireEvent.change(searchInput, {
      target: { value: "Fearless (Taylor's Version)" },
    });

    const album = await screen.findByText("Fearless (Taylor's Version)");
    const albumList = await screen.findByRole("list");

    const { getAllByRole } = within(albumList);
    const items = getAllByRole("listitem");

    expect(album).toBeInTheDocument();
    expect(items.length).toBe(1);
  });
});
