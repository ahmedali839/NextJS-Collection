import EventButton from "./components/sendGAEvent";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <h2 className="mb-4 text-2xl font-bold">
        Welcome to the our Event Tracker
      </h2>
      <EventButton />
    </div>
  );
}
