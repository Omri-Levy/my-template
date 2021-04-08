type PageSize = number;
type SetPageSize = (pageSize: PageSize) => void;
type HookReturns = () => {
  setPageSize: SetPageSize;
  cachedPageSize: PageSize;
};

export { HookReturns, SetPageSize, PageSize };
