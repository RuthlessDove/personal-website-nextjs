
export const ProjectTechIcons = ({
  iconList,
}: {
  iconList: React.ElementType[];
}) => {
  return (
    <>
      <div className="flex">
        {iconList.map((Icon, index) => {
          return (
            <div
              key={index}
              className="bg-gray-600 rounded-full inline-flex border-2 border-white/40 p-1"
              style={{ transform: `translateX(-${5 * index * 2}px)` }}
            >
              <Icon className="size-6" />
            </div>
          );
        })}
      </div>
    </>
  );
};
