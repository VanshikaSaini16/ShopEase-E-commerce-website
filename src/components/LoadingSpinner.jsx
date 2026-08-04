function LoadingSpinner({ message = "Loading..." }) {
  return (
    <div className="flex min-h-[200px] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-3 h-10 w-10 animate-spin rounded-full border-4 border-indigo-600 border-t-transparent" />
        <p className="text-sm text-slate-500">{message}</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
