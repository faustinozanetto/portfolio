import { useMemo, useState } from 'react';

/**
 * A hook for filtering an array of data with a given filter.
 *
 * @template T The type of the data. Ex: `Project`.
 * @template K The type of the filter. Ex: `string`.
 *
 * @param {T[]} initialData - The initial array of data to be filtered. The type of the elements in the array is specified by `T`.
 * @param {K} initialFilter - The initial filter to apply to the data. The type of the filter is specified by `K`.
 * @param {() => K[]} getFiltersFunc - A function that returns an array of available filters. The type of the filters is specified by `K`.
 * @param {(data: T[], filter: K) => T[]} filterFunc - A function that takes in an array of data and a filter and returns the filtered array. The type of the data is specified by `T` and the type of the filter is specified by `K`.
 * @returns {[T[], K, K[], (newFilter: K) => void]} An array containing the filtered data, the currently applied filter, the available filters, and a function to update the applied filter. The type of the filtered data is specified by `T`, and the types of the applied filter and available filters are specified by `K`.
 */
const useFilterData = <T, K>(
  initialData: T[],
  initialFilter: K,
  getFiltersFunc: () => K[],
  filterFunc: (data: T[], filter: K) => T[]
) => {
  const [selectedFilter, setSelectedFilter] = useState<K>(initialFilter);
  const [posibleFilters] = useState<K[]>(getFiltersFunc());

  /**
   * Memoized function that handles the filtering using the filterFunc.
   */
  const getFilteredData = useMemo(() => {
    let filteredData: T[] = initialData;
    if (selectedFilter !== initialFilter) {
      filteredData = filterFunc(initialData, selectedFilter);
    }
    return filteredData;
  }, [selectedFilter]);

  return {
    selectedFilter,
    posibleFilters,
    setSelectedFilter,
    filteredData: getFilteredData,
  };
};

export default useFilterData;
