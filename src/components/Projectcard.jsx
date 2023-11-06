function Projectcard({ title, img, stack, live, source }) {
  const goToSource = () => {
    window.location.href = source;
  };
  return (
    <div
      className="project-card  md:shadow-md  rounded-lg  flex flex-col justify-evenly m-4 items-center md:border-none bg-white shadow-md shadow-gray-800 cursor-pointer"
      onClick={goToSource}
    >
      <img src={img} className="h-[200px] w-full rounded-tl-md rounded-tr-md" />
      <div className="bg-white w-full rounded-lg p-2">
        <div className="text-neutral-800 font-semibold text-lg w-full py-2">
          {title}
        </div>
        <div className="text-neutral-800  ">{stack}</div>
      </div>
    </div>
  );
}
export default Projectcard;
