"use client";

import { AlertTriangle } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex size-full flex-col items-center justify-center gap-4 text-center">
      <AlertTriangle className="size-10 text-red-500 dark:text-red-400" />
      <h2 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
        Something went wrong
      </h2>
      <p className="mb-6 max-w-md text-sm text-gray-600 dark:text-gray-300">
        An unexpected error has occurred. Please try again or contact support if the issue persists.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-md bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
      >
        Try Again
      </button>
    </div>
  );
}
