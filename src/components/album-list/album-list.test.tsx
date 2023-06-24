import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { AlbumList } from "./album-list";

describe("album list component tests", () => {
  it("Should have a title", () => {
    render(<AlbumList />);
    const h2 = screen.getByText("Top 100 Albums");

    expect(h2).toBeInTheDocument();
  });

  it("should render an album list", () => {
    render(
      <RecoilRoot>
        <AlbumList />
      </RecoilRoot>
    );

    const album1 = screen.getByText("chemistry");
    const album2 = screen.getByText("Mystical Magical Rhythmical Radical Ride");

    expect(album1).toBeInDocument();
    expect(album2).toBeInDocument();
  });
});
