import { useState, useCallback } from "react";

interface UseFormSubmitReturn<T> {
  submit: (data: T) => Promise<void>;
  isLoading: boolean;
  error: string | null;
  success: boolean;
}

export const useFormSubmit = <T>(url: string): UseFormSubmitReturn<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submit = useCallback(
    async (data: T) => {
      setIsLoading(true);
      setError(null);
      setSuccess(false);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const body = await response.json().catch(() => null);
          throw new Error(
            body?.message || `Request failed with status ${response.status}`
          );
        }

        setSuccess(true);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "An unexpected error occurred";
        setError(message);
      } finally {
        setIsLoading(false);
      }
    },
    [url]
  );

  return { submit, isLoading, error, success };
};
