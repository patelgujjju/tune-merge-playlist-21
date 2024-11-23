import { Sidebar } from "@/components/Sidebar";
import { Player } from "@/components/Player";
import { SongCard } from "@/components/SongCard";
import { create } from "zustand";

interface Song {
  id: number;
  title: string;
  artist: string;
  cover: string;
  url: string;
}

interface PlayerStore {
  currentSong: Song | null;
  isPlaying: boolean;
  setCurrentSong: (song: Song) => void;
  togglePlayPause: () => void;
}

export const usePlayerStore = create<PlayerStore>((set) => ({
  currentSong: null,
  isPlaying: false,
  setCurrentSong: (song) => set({ currentSong: song, isPlaying: true }),
  togglePlayPause: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));

const songs: Song[] = [
  {
    id: 1,
    title: "Tum Hi Ho",
    artist: "Arijit Singh",
    cover: "https://c.saavncdn.com/992/Aashiqui-2-Hindi-2013-500x500.jpg",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Replace with actual song URL
  },
  {
    id: 2,
    title: "Kesariya",
    artist: "Arijit Singh, Pritam",
    cover: "https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // Replace with actual song URL
  },
  {
    id: 3,
    title: "Channa Mereya",
    artist: "Arijit Singh",
    cover: "https://c.saavncdn.com/742/Ae-Dil-Hai-Mushkil-Hindi-2016-500x500.jpg",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", // Replace with actual song URL
  },
  {
    id: 4,
    title: "Raataan Lambiyan",
    artist: "Jubin Nautiyal, Asees Kaur",
    cover: "https://c.saavncdn.com/238/Shershaah-Original-Motion-Picture-Soundtrack--Hindi-2021-20210815181610-500x500.jpg",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", // Replace with actual song URL
  },
  {
    id: 5,
    title: "Pasoori",
    artist: "Ali Sethi, Shae Gill",
    cover: "https://c.saavncdn.com/663/Pasoori-Punjabi-2022-20220203181058-500x500.jpg",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3", // Replace with actual song URL
  },
  {
    id: 6,
    title: "Kahani Suno",
    artist: "Kaifi Khalil",
    cover: "https://c.saavncdn.com/977/Kahani-Suno-2-0-Hindi-2022-20221006155213-500x500.jpg",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3", // Replace with actual song URL
  },
];

const Index = () => {
  return (
    <div className="flex min-h-screen bg-spotify-dark">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8 pb-28">
        <h1 className="mb-8 text-3xl font-bold">Welcome Back</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {songs.map((song) => (
            <SongCard
              key={song.id}
              title={song.title}
              artist={song.artist}
              cover={song.cover}
              onPlay={() => usePlayerStore.getState().setCurrentSong(song)}
            />
          ))}
        </div>
      </main>
      <Player />
    </div>
  );
};

export default Index;