// Update IOS_APP_STORE_URL when the iOS app is published to the App Store
const IOS_APP_STORE_URL = null;

const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=ai.threadlock.app";

const GooglePlayIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6"
    aria-hidden="true"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3.5 1.1a1 1 0 0 0-.5.86v20.08a1 1 0 0 0 .5.86l.07.04L15.2 12l-.07-.07L3.57 1.06 3.5 1.1Z" fill="#EA4335"/>
    <path d="m19.15 10.43-2.7-1.56-3.32 3.13 3.32 3.13 2.71-1.57a1.43 1.43 0 0 0 0-3.13Z" fill="#FBBC04"/>
    <path d="M3.5 22.9c.29.17.65.14.97-.04l11.97-6.91-3.32-3.13L3.5 22.9Z" fill="#34A853"/>
    <path d="M3.5 1.1 13.12 10.82l3.32-3.13L4.47 1.14A1.16 1.16 0 0 0 3.5 1.1Z" fill="#4285F4"/>
  </svg>
);

const AppleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-6 h-6"
    aria-hidden="true"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.83ZM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11Z"/>
  </svg>
);

export default function AppDownloadButtons({ className = "" }) {
  return (
    <div className={`flex flex-wrap gap-3 mt-5 ${className}`}>
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 bg-slate-900 text-white px-4 py-2.5 rounded-xl hover:bg-slate-700 transition-colors"
        aria-label="Get it on Google Play"
      >
        <GooglePlayIcon />
        <span className="flex flex-col leading-tight">
          <span className="text-xs opacity-75">Get it on</span>
          <span className="text-sm font-semibold">Google Play</span>
        </span>
      </a>
      {IOS_APP_STORE_URL ? (
        <a
          href={IOS_APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 bg-slate-900 text-white px-4 py-2.5 rounded-xl hover:bg-slate-700 transition-colors"
          aria-label="Download on the App Store"
        >
          <AppleIcon />
          <span className="flex flex-col leading-tight">
            <span className="text-xs opacity-75">Download on the</span>
            <span className="text-sm font-semibold">App Store</span>
          </span>
        </a>
      ) : (
        <button
          disabled
          className="inline-flex items-center gap-2.5 bg-slate-100 text-slate-400 px-4 py-2.5 rounded-xl cursor-not-allowed border border-slate-200"
          title="iOS app coming soon"
          aria-label="iOS App Store, Coming Soon"
        >
          <AppleIcon />
          <span className="flex flex-col leading-tight">
            <span className="text-xs">Coming Soon on</span>
            <span className="text-sm font-semibold">App Store</span>
          </span>
        </button>
      )}
    </div>
  );
}
