import { useCallback } from 'react';

type UseLocalStorageResult<T> = {
  getValue: (id: string) => T | null;
  setValue: (id: string, value: T) => void;
};

function useLocalStorage<T>(): UseLocalStorageResult<T> {
  // get the value from localStorage
  const getValue = useCallback((id: string): T | null => {
    try {
      const storedValue = localStorage.getItem(id);
      return storedValue ? JSON.parse(storedValue) : null;
    } catch (error) {
      console.error(`Error getting item ${id} from localStorage`, error);
      return null;
    }
  }, []);

  // set the value in localStorage
  const setValue = useCallback((id: string, value: T): void => {
    try {
      localStorage.setItem(id, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item ${id} in localStorage`, error);
    }
  }, []);

  return { getValue, setValue };
}

export default useLocalStorage;
