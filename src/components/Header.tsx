import React from "react";

export interface HeaderProps {
  baseUrl: string;
}

interface HeaderRenderedProps {
  url: string;
}

function _Header({ url }: HeaderRenderedProps) {
  return (
    <>
      <a href={url}>Support us</a>
    </>
  );
}

export const Header = headerWrapper(_Header);

export function _SupportAgainHeader({ url }: HeaderRenderedProps) {
  return (
    <>
      <a href={url}>Support us again</a>
    </>
  );
}

export const SupportAgainHeader = headerWrapper(_SupportAgainHeader);

export function _AusHeader({ url }: HeaderRenderedProps) {
  return (
    <>
      <a href={url}>Support us in Australia</a>
    </>
  );
}

export const AusHeader = headerWrapper(_AusHeader);

function headerWrapper(
  Header: React.FC<HeaderRenderedProps>
): React.FC<HeaderProps> {
  function Wrapped({ baseUrl }: HeaderProps) {
    const url = addCountryCodeToUrl(baseUrl);
    // add tracking to primary cta
    // add tracking to secondary cta
    // send insert event to ophan
    // send view event to ophan

    return (
      <header>
        <Header url={url} />
      </header>
    );
  }

  return Wrapped;
}

function addCountryCodeToUrl(baseUrl: string): string {
  return baseUrl + "/uk";
}
