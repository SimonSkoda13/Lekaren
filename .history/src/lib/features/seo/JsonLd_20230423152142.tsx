export interface JsonLdProps {
  source?: any;
}

export const JsonLd = (props: JsonLdProps) => {
  const { source = {} } = props;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(source) }}
    />
  );
};
