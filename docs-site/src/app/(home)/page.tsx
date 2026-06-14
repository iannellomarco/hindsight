import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-3xl font-semibold">Hindsight</h1>
      <p className="max-w-md text-fd-muted-foreground">
        A daybook for your Mac. A day journal, your meetings, and a second
        brain — all on your machine.
      </p>
      <Link
        href="/docs"
        className="rounded-full bg-fd-primary px-5 py-2 text-sm font-medium text-fd-primary-foreground"
      >
        Read the docs
      </Link>
    </main>
  );
}
