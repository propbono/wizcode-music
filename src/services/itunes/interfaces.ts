export interface ItunesService {
  feed: Feed;
}

export interface Feed {
  author: Author;
  entry: Entry[];
  updated: Label;
  rights: Label;
  title: Label;
  icon: Label;
  link: Link[];
  id: Label;
}

export interface Author {
  name?: Label;
  uri?: Label;
}

export interface Label {
  label?: string;
}

export interface Entry {
  "im:name"?: Label;
  "im:image"?: IMImage[];
  title?: Label;
  link?: Link;
  "im:artist"?: IMArtist;
  "im:releaseDate"?: IMReleaseDate;
}

export interface Category {
  attributes?: CategoryAttributes;
}

export interface CategoryAttributes {
  "im:id"?: string;
  term?: string;
  scheme?: string;
  label?: string;
}

export interface ID {
  label?: string;
  attributes?: IDAttributes;
}

export interface IDAttributes {
  "im:id"?: string;
}

export interface IMArtist {
  label?: string;
  attributes?: IMArtistAttributes;
}

export interface IMArtistAttributes {
  href?: string;
}

export interface EntryIMContentType {
  "im:contentType"?: IMContentTypeIMContentType;
  attributes?: IMContentTypeAttributes;
}

export interface IMContentTypeAttributes {
  term?: Term;
  label?: Label;
}

export type Term = "Music" | "Album";

export interface IMContentTypeIMContentType {
  attributes?: IMContentTypeAttributes;
}

export interface IMImage {
  label?: string;
  attributes?: IMImageAttributes;
}

export interface IMImageAttributes {
  height?: string;
}

export interface IMPrice {
  label?: string;
  attributes?: IMPriceAttributes;
}

export interface IMPriceAttributes {
  amount?: string;
  currency?: Currency;
}

export type Currency = "USD";

export interface IMReleaseDate {
  label?: string;
  attributes?: Label;
}

export interface Link {
  attributes?: LinkAttributes;
}

export interface LinkAttributes {
  rel?: Rel;
  type?: Type;
  href?: string;
}

export type Rel = "alternate" | "self";

export type Type = "text/html";
