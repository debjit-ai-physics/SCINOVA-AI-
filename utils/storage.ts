export const Storage = {

  set(key: string, value: unknown) {

    localStorage.setItem(
      key,
      JSON.stringify(value)
    );

  },

  get(key: string) {

    const item = localStorage.getItem(key);

    if (!item) return null;

    return JSON.parse(item);

  },

  remove(key: string) {

    localStorage.removeItem(key);

  },

  clear() {

    localStorage.clear();

  }

};