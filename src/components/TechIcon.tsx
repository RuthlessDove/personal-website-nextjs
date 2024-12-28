export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(233 213 255)" />
          <stop offset="100%" stopColor="rgb(96, 165, 250)" />
        </linearGradient>
        <style>
          {`
            .fill-[url(#tech-icon-gradient)] * {
              fill: url(#tech-icon-gradient) !important;
            }
          `}
        </style>
      </svg>
    </>
  );
};
