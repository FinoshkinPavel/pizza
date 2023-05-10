import React from "react";
import ContentLoader from "react-content-loader";

export const PizzaSceleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={260}
    height={400}
    viewBox="0 0 260 400"
    backgroundColor="#e2e3e4"
    foregroundColor="#bababa"
    {...props}
  >
    <circle cx="126" cy="94" r="80" />
    <rect x="40" y="183" rx="5" ry="5" width="173" height="26" />
    <rect x="139" y="207" rx="0" ry="0" width="0" height="1" />
    <rect x="-2" y="224" rx="5" ry="5" width="255" height="100" />
    <rect x="14" y="347" rx="5" ry="5" width="78" height="21" />
    <rect x="102" y="339" rx="15" ry="15" width="140" height="35" />
  </ContentLoader>
);
