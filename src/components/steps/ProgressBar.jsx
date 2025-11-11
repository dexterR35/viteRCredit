export const Progress = ({ currentStep, totalSteps }) => {
  const progressPercentage = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full bg-gray-100 h-2 relative overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-500 ease-out relative overflow-hidden"
        style={{ width: `${progressPercentage}%` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <span className="text-xs font-semibold text-gray-600 z-10">
          {currentStep} / {totalSteps}
        </span>
      </div>
    </div>
  );
};
