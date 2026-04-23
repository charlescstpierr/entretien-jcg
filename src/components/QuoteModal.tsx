import { getHomeModalHtml } from "@/lib/static-content";

export function QuoteModal() {
  return <div className="modal" id="quoteModal" aria-hidden="true" dangerouslySetInnerHTML={{ __html: getHomeModalHtml() }} />;
}
