const useAutocomplete = (search, options) => {
  return options.filter(
    (o) =>
      o.currency.toLowerCase().includes(search.toLowerCase()) ||
      o.cc.toLowerCase().includes(search.toLowerCase())
  );
};
export default useAutocomplete;
