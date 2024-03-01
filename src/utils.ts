export const siteConfig = {
  title: "Homy",
  description:
    "Homy is a beautiful website template designed for Real Estate Agency.",
  keywords: ["Real estate", "Property sale", "Property buy"],
} as const;

export const animationCreate = () => {
  if (typeof window !== "undefined") {
    import("wowjs").then((module) => {
      const WOW = module.default;
      new WOW.WOW({ live: false }).init();
    });
  }
};

export const setLocalStorage = <T>(name: string, items: T[]): void => {
  localStorage.setItem(name, JSON.stringify(items));
};

export const getLocalStorage = <T>(name: string): T[] => {
  const data = localStorage.getItem(name);
  if (data) {
    return JSON.parse(data) as T[];
  } else {
    localStorage.setItem(name, JSON.stringify([]));
    return [] as T[];
  }
};
