import Overview from "./Overview";
import HeroGrid from "./HeroGrid";
import SectionNav from "./SectionNav";
import GuestFavourite from "./sections/GuestFavourite";
import Highlights from "./sections/Highlights";
import Description from "./sections/Description";
import SleepSection from "./sections/SleepSection";
import AmenitiesSection from "./sections/AmenitiesSection";
import Calendar from "./Calendar";
import ReviewsSection from "./sections/ReviewsSection";
import MapSection from "./sections/MapSection";
import HostSection from "./sections/HostSection";
import ThingsToKnow from "./sections/ThingsToKnow";
import SimilarStays from "./SimilarStays";
import BookingCard from "./BookingCard";

export default function ListingContent({
  onOpenTour,
  onOpenAmenities,
  onOpenReviews,
  onReserve,
}: {
  onOpenTour: () => void;
  onOpenAmenities: () => void;
  onOpenReviews: () => void;
  onReserve: () => void;
}) {
  return (
    <main id="main">
      <SectionNav onReserve={onReserve} />

      <div className="mx-auto max-w-[1154px] px-[80px] pb-4">
        <Overview />
        <HeroGrid onOpenTour={onOpenTour} />

        <div className="mt-8 grid grid-cols-[minmax(0,1fr)_372px] items-stretch gap-x-[96px]">
          <div className="min-w-0">
            <section className="first">
              <GuestFavourite />
              <div className="pt-6">
                <Highlights />
              </div>
              <div className="pt-6">
                <Description />
              </div>
            </section>

            <hr className="my-8 border-line-light" />

            <section>
              <SleepSection />
            </section>

            <hr className="my-8 border-line-light" />

            <section id="amenities" className="scroll-mt-20">
              <AmenitiesSection onOpenAmenities={onOpenAmenities} />
            </section>

            <hr className="my-8 border-line-light" />

            <section>
              <Calendar />
            </section>
          </div>

          <aside className="relative self-start">
            <BookingCard />
          </aside>
        </div>
      </div>

      <div className="border-t border-line-light">
        <div className="mx-auto max-w-[1154px] px-[80px]">
          <section id="reviews" className="scroll-mt-20 pt-12">
            <ReviewsSection onOpenReviews={onOpenReviews} />
          </section>

          <hr className="my-12 border-line-light" />

          <section id="location" className="scroll-mt-20">
            <MapSection />
          </section>

          <hr className="my-12 border-line-light" />

          <section>
            <HostSection />
          </section>

          <hr className="my-12 border-line-light" />

          <section>
            <ThingsToKnow />
          </section>

          <hr className="my-12 border-line-light" />

          <section>
            <SimilarStays />
          </section>

          <div className="h-16" />
        </div>
      </div>
    </main>
  );
}