export function MainMarkup({ html }: { html: string }) {
  return <main dangerouslySetInnerHTML={{ __html: html }} />;
}

export function HtmlMarkup({ html }: { html: string }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
