import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-20 flex min-h-[calc(100vh-200px)] items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-6xl font-semibold text-brand-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-brand-text sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-10">
          <Link
            href="/"
            className="rounded-md bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-brand-secondary"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
