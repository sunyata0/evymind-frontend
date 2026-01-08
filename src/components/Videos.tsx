import useEmblaCarousel from "embla-carousel-react";
import { FiPlay } from "react-icons/fi";

type VideoItem = {
  id: string;
  title: string;
  subtitle: string;
};

const VIDEOS: VideoItem[] = [
  { id: "intro", title: "Titre de la vidéo", subtitle: "Exemple / tuto / explication" },
  { id: "workflow", title: "Titre de la vidéo", subtitle: "Exemple / tuto / explication" },
  { id: "advanced", title: "Titre de la vidéo", subtitle: "Exemple / tuto / explication" },
];

export const Videos = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
  });

  return (
    <section id="videos" class="relative">
      {/* Title */}
      <div class="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <h2 class="mb-10 text-center text-3xl font-bold sm:text-4xl">Vidéos</h2>
      </div>

      {/* Full-width carousel */}
      <div class="relative pb-24">
        <div ref={emblaRef} class="overflow-hidden">
          <div class="flex gap-6 px-4 sm:px-6 lg:px-12">
            {VIDEOS.map((video) => (
              <div key={video.id} class="min-w-[85%] sm:min-w-[60%] lg:min-w-[32%]">
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        </div>

        {/* Edge fades */}
        <div class="from-bg pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r to-transparent" />
        <div class="from-bg pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l to-transparent" />
      </div>
    </section>
  );
};

const VideoCard = ({ video }: { video: VideoItem }) => {
  return (
    <div class="flex flex-col gap-3">
      {/* Meta */}
      <div>
        <h3 class="text-primary text-sm font-semibold">{video.title}</h3>
        <p class="text-text-muted text-xs">{video.subtitle}</p>
      </div>

      {/* Frame — borderless */}
      <button
        type="button"
        aria-label={`Play ${video.title}`}
        class="bg-surface/30 focus-visible:ring-primary relative aspect-video w-full overflow-hidden rounded-2xl backdrop-blur transition focus-visible:ring-2 focus-visible:outline-none"
      >
        {/* Soft inner glow */}
        <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_260px_at_50%_20%,rgba(209,255,0,0.14),transparent_60%)]" />

        {/* Play button */}
        <div class="absolute inset-0 flex items-center justify-center">
          <span class="flex h-14 w-14 items-center justify-center rounded-full bg-black/45 backdrop-blur">
            <FiPlay class="text-primary h-6 w-6 translate-x-px" />
          </span>
        </div>
      </button>
    </div>
  );
};
