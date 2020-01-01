import { data } from '../data';
import { bin2str } from 'utils';
import tiles from 'tiles';

export function XBLD(bytes: any) {
  const view = new Uint8Array(bytes);

  view.forEach((bits, i) => {
    const xbld: any = {};

    if (tiles.data[bits]) {
      xbld.id = bits;
      xbld.type = tiles.data[bits].type || xbld.type;
      xbld.subtype = tiles.data[bits].subtype || xbld.subtype;
    }

    if (xbld.id > 0) {
      xbld.desc = tiles.data[xbld.id];
    }

    // raw binary values as strings for research/debug
    xbld.binaryText = {
      bits: bin2str(bits, 8),
    };

    data.cells[i].segments.XBLD = xbld;
  });
}