'use-strict';

const tiles = [
  {
    id: "id-1",
    title: "Tile #1",
    imgUrl:
      "https://pics.freeicons.io/illustrations/png/1656569137_0-illustration_png.png",
  },
  {
    id: "id-2",
    title: "Tile #2",
    imgUrl:
      "https://pics.freeicons.io/illustrations/png/1656569137_1-illustration_png.png",
  },
  {
    id: "id-3",
    title: "Tile #3",
    imgUrl:
      "https://pics.freeicons.io/illustrations/png/1656569137_2-illustration_png.png",
  },
  {
    id: "id-4",
    title: "Tile #4",
    imgUrl:
      "https://pics.freeicons.io/illustrations/png/1656569137_3-illustration_png.png",
  },
  {
    id: "id-5",
    title: "Tile #5",
    imgUrl:
      "https://pics.freeicons.io/illustrations/png/1656590146_0-illustration_png.png",
  },
  {
    id: "id-6",
    title: "Tile #6",
    imgUrl:
      "https://pics.freeicons.io/illustrations/png/1656590146_1-illustration_png.png",
  },
  {
    id: "id-7",
    title: "Tile #7",
    imgUrl:
      "https://pics.freeicons.io/illustrations/png/1656590149_13-illustration_png.png",
  },
  {
    id: "id-8",
    title: "Tile #8",
    imgUrl:
      "https://pics.freeicons.io/illustrations/png/1656590151_24-illustration_png.png",
  },
  {
    id: "id-9",
    title: "Tile #9",
    imgUrl:
      "https://pics.freeicons.io/illustrations/png/1656590147_3-illustration_png.png",
  },
  {
    id: "id-10",
    title: "Tile #10",
    imgUrl:
      "https://pics.freeicons.io/illustrations/png/1656590147_4-illustration_png.png",
  },
];

function createTiles() {
  const tilesEl = document.getElementById("tiles");

  tiles.forEach((tile) => {
    const t = document.createElement("div");
    t.id = tile.id;
    t.className = 'tile-component';

    const header = document.createElement("h2");
    header.textContent = tile.title;

    const img = document.createElement("img");
    img.src = tile.imgUrl;
    img.width = "256";

    t.append(header);
    t.append(img);

    tilesEl.append(t);
  });

  return tilesEl;
}

createTiles();
