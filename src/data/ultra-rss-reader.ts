export const ultraRssReaderRoutes = {
  landing: "/ultra-rss-reader",
  support: "/ultra-rss-reader/support",
  download: "/ultra-rss-reader/download",
  privacy: "/ultra-rss-reader/privacy",
} as const;

export const ultraRssReaderPublicPaths = [
  ultraRssReaderRoutes.landing,
  ultraRssReaderRoutes.support,
  ultraRssReaderRoutes.download,
  ultraRssReaderRoutes.privacy,
] as const;

export const ultraRssReaderReleasesUrl = "https://github.com/jey3dayo/ultra-rss-reader/releases";

export const ultraRssReaderNamespaceItem = {
  href: ultraRssReaderRoutes.landing,
  label: "Ultra RSS Reader",
  note: "最初の app namespace。landing / support / download / privacy を公開しています。",
} as const;

export const ultraRssReaderPageMapItems = [
  {
    href: ultraRssReaderRoutes.support,
    label: "Support",
    note: "問い合わせ窓口、FAQ、トラブルシュート案内をまとめた公開ページです。",
  },
  {
    href: ultraRssReaderRoutes.download,
    label: "Download",
    note: "公開 download 導線の案内ページです。最新版の availability は GitHub Releases 基準で確認します。",
  },
  {
    href: ultraRssReaderRoutes.privacy,
    label: "Privacy",
    note: "現在の privacy policy と feed content policy の要点をまとめた公開ページです。",
  },
] as const;
