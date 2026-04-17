// import LoadingSkeleton from "../_components/loadingSkeleton";

export default function SpinData() {
  return (
    <div className="flex items-center justify-center ">
      <div className="skeleton bg-transparent text-accent-500 dm:text-2xl lg:text-2xl text-xl ">
        Loading, please wait
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
        <span className="loading loading-ring w-14 h-12"></span>
        <span className="loading loading-ring w-16 h-16 "></span>
      </div>
    </div>
  );
}
