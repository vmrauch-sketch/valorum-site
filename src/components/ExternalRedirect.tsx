import { useEffect } from "react";

interface ExternalRedirectProps {
  url: string;
}

export const ExternalRedirect = ({ url }: ExternalRedirectProps) => {
  useEffect(() => {
    window.location.replace(url);
  }, [url]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <p className="text-muted-foreground">Redirecionando para {url}...</p>
    </div>
  );
};
