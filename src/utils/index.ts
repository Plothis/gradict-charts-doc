export function Object2FormData(data: Record<string, any>) {
  const form = new FormData();
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      const value = data[key];
      form.append(key, value);
    }
  }
  return form;
}
