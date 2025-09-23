"use client";

import Script from 'next/script';
import type { FC } from 'react';

// This allows using custom elements in JSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'vturb-smartplayer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { id: string };
    }
  }
}

type VturbPlayerProps = {
  playerId: string;
  scriptId: string;
};

export const VturbPlayer: FC<VturbPlayerProps> = ({ playerId, scriptId }) => {
  return (
    <>
      <vturb-smartplayer
        id={`vid-${playerId}`}
        style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px' }}
      ></vturb-smartplayer>
      <Script
        src={`https://scripts.converteai.net/${scriptId}/players/${playerId}/v4/player.js`}
        strategy="afterInteractive"
      />
    </>
  );
};
