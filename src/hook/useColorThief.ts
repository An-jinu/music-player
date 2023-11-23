import ColorThief from 'color-thief-ts';
import { useEffect, useState } from 'react';

const colorThief = new ColorThief();
export const useColorThief = (url: string): string[] => {
  const [palette, setPalette] = useState<string[]>([]);

  const getPaletteData = async () => {
    const newPalette = await colorThief.getPaletteAsync(url, 2, { colorType: 'hex' });
    setPalette(newPalette);
  };

  useEffect(() => {
    if (url) {
      getPaletteData();
    }
  }, [url]);

  return palette;
};
