const ErrorPage = () => {
  return (
    <>
      <main className="min-h-[80vh] grid place-items-center [background:linear-gradient(135deg,#1a1a2e_0%,#080808_60%)] px-4">
        <div className="text-center">
          <p className="eyebrow mb-3">ERROR</p>
          <h1 className="font-display text-primary text-[clamp(40px,5vw,72px)] leading-tight">
            An error occurred!
          </h1>
          <p className="text-[17px] leading-relaxed text-secondary mt-4">
            Could not find this page!
          </p>
        </div>
      </main>
    </>
  );
};
export default ErrorPage;
