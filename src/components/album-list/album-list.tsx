import { atom, useRecoilState } from "recoil";
import { useAlbums } from "../../services/itunes/use-albums";
import { useEffect } from "react";
import { Section } from "../layout/section";
import { Container } from "../layout/container";
import { Album } from "../../services/itunes/interfaces";

export const albumListState = atom<Array<Album>>({
  key: "albumListState",
  default: [],
});

export const AlbumList: React.FC = () => {
  const [albumList, setAlbumList] = useRecoilState(albumListState);

  const { data: albums, error } = useAlbums();

  useEffect(() => {
    if (albums) {
      setAlbumList(albums);
    }
  }, [albums, setAlbumList]);

  if (error) {
    return <div>Failed to fetch albums. Please try again later.</div>;
  }

  return (
    <Section className="bg-slate-50">
      <Container>
        <h2 className="text-lg md:text-2xl font-bold text-slate-800 pt-2 pb-4">
          Top Albums
        </h2>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-6 justify-between counter-reset">
          {albumList.map((album) => (
            <li
              key={album.title?.label}
              className="flex flex-col w-full h-auto bg-slate-800 text-slate-50 rounded-lg shadow-md"
            >
              <img
                src={album["im:image"]?.[2].label}
                className="rounded-t-lg w-full h-auto aspect-video object-cover"
              />
              <span className="text-2xl font-bold md:text-3xl p-2 md:truncate md:hover:whitespace-normal md:hover:cursor-pointer">
                {album["im:name"]?.label}
              </span>
              <span className="text-lg font-medium md:text-2xl flex-wrap p-2">
                {album["im:artist"]?.label}
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
};
