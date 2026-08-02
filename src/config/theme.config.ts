const siteUrl = (
  import.meta.env.SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  "https://rn-travel.github.io"
).replace(/\/$/, "");

export const SITE = {
  name: "RN Travel",
  description:
    "Dua sejoli yang ingin membuat kenangan di banyak tempat. Masih berlatih untuk mempunyai skill fotografi, videografi, dan editing yang apik",
  url: siteUrl,
  locale: "en-US",
  language: "en",
  repositoryUrl: "https://github.com/",
};

export const NAVIGATION = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const CONTACT = {
  email: "nardiyansah.jatmiko@gmail.com",
  socialHandle: "@nardiyansah",
  socialUrl: "https://x.com/quietpages",
};

export const FORMS = {
  contact: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
  newsletter: {
    action: "",
    method: "post",
    enctype: "application/x-www-form-urlencoded",
  },
};

export const SOCIAL_LINKS = [
  { href: "/rss.xml", label: "RSS feed", icon: "rss" },
  { href: CONTACT.socialUrl, label: `${SITE.name} on X`, icon: "twitter" },
  { href: SITE.repositoryUrl, label: `${SITE.name} on GitHub`, icon: "github" },
  { href: `mailto:${CONTACT.email}`, label: "Email", icon: "mail" },
];

export const authors = [
  {
    slug: "nardiyansah",
    name: "Nardiyansah Tri Jatmiko",
    bio: "",
    longBio: "",
    avatar: "/avatars/elena-march.svg",
  }
];

export const categories = [
  // { slug: "essays", name: "Essays" }, example
];

export const tags = [
  // { slug: "writing", name: "Writing" }, example
];
