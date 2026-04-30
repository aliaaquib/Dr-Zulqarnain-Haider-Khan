export default function Loading() {
  return (
    <main className="min-h-screen bg-background px-6 py-10 text-foreground">
      <div className="mx-auto flex max-w-6xl animate-pulse flex-col gap-10">
        <div className="h-8 w-24 rounded-full bg-black/5" />
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <div className="h-6 w-40 rounded-full bg-black/5" />
            <div className="h-24 w-full max-w-2xl rounded-[2rem] bg-black/5" />
            <div className="h-16 w-full max-w-xl rounded-[2rem] bg-black/5" />
          </div>
          <div className="mx-auto aspect-[4/5] w-full max-w-md rounded-[2rem] bg-black/5" />
        </div>
      </div>
    </main>
  );
}
