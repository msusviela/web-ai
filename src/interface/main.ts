import { Song } from "../domain/song.ts";
import { SongList } from "../domain/songlist.ts";

const btnAdd = document.getElementById("btn-add") as HTMLButtonElement | null;
const inpTitle = document.getElementById(
  "inp-title",
) as HTMLInputElement | null;
const inpArtist = document.getElementById(
  "inp-artist",
) as HTMLInputElement | null;
const inpYear = document.getElementById(
  "inp-year",
) as HTMLInputElement | null;

const mainSongList = new SongList();

if (btnAdd && inpTitle && inpArtist && inpYear) {
  btnAdd.addEventListener("click", () => {
    const songsErrorContainer = document.getElementById("add-songs-error");
    const songsError = document.getElementById("add-songs-error-msg");
    try {
      const newSong = new Song(inpTitle.value);
      newSong.artista = inpArtist.value;
      newSong.year = parseInt(inpYear.value);
      mainSongList.add(newSong);
      clearInputs(inpTitle, inpArtist, inpYear);
      songsErrorContainer?.classList.add("d-none");
      loadSongList(newSong);
      appendAlert(`${newSong.titulo} agregada correctamente!`, "success");
    } catch (error) {
      songsErrorContainer?.classList.remove("d-none");
      if (songsError) {
        if (error instanceof Error) {
          songsError.innerText = error.message;
        } else {
          songsError.innerText = String(error);
        }
      }
    }
  });

  inpArtist.addEventListener("keypress", function (event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault();
      btnAdd.click();
    }
  });
}

function clearInputs(
  inpTitleEl: HTMLInputElement,
  inpArtistEl: HTMLInputElement,
  inpYearEl: HTMLInputElement,
) {
  inpTitleEl.value = "";
  inpArtistEl.value = "";
  inpYearEl.value = "";
}

function loadSongList(newSong: Song) {
  const songsList = document.getElementById("songs-list");
  const songsContainer = document.getElementById("songs");
  const emptyList = document.getElementById("empty-list");

  emptyList?.classList.add("d-none");
  songsContainer?.classList.remove("d-none");
  if (songsList) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerText = newSong.toString();
    songsList.appendChild(li);
  }
}

const alertPlaceholder = document.getElementById("alerts");
const appendAlert = (message: string, type: "success" | "danger") => {
  if (!alertPlaceholder) return;
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible pe-4" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};
