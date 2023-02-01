import ContentLoader from "react-content-loader";

export function Loader() {
  return (
    <ContentLoader viewBox="0 0 400 173" foregroundColor="rgb(32, 39, 56)" backgroundColor="rgb(26, 31, 43)">
      {/* Top row */}
      <rect x="0" y="0" rx="4" ry="4" width="192" height="77" />
      <rect x="208" y="0" rx="4" ry="4" width="192" height="77" />

      {/* Bottom row */}
      <rect x="0" y="95" rx="4" ry="4" width="192" height="77" />
      <rect x="208" y="95" rx="4" ry="4" width="192" height="77" />
    </ContentLoader>
  );
}
