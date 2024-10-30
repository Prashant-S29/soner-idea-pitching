import { useEffect, useCallback } from 'react';
import { KeyPressEventKeys } from '@/types/keyPressEvent';

interface UseKeyBinderParams {
  key: KeyPressEventKeys;
  ctrl?: boolean; // Optional parameter
  func: (...args: unknown[]) => unknown;
}

/**
 * useKeyBinder
 *
 * Custom hook that binds a keyboard event to a function with optional control key support.
 *
 * This hook allows you to bind a function to a specific key press, either as a single key
 * (e.g., 'Esc', 'a', '1', etc.) or in combination with the Ctrl key (e.g., 'Ctrl + A', 'Ctrl + S').
 *
 * @param {UseKeyBinderParams} params - The parameters for the hook.
 * @param {KeyPressEventKeys} params.key - The key to listen for.
 * @param {boolean} [params.ctrl=false] - Optional. Whether the Ctrl key should be pressed. Default is false.
 * @param {(...args: unknown[]) => unknown} params.func - The function to execute on key press.
 *
 * @example
 * // Binding a function to 'a' key press alone
 * useKeyBinder({
 *   key: 'a',
 *   func: () => console.log('A was pressed'),
 * });
 *
 * @example
 * // Binding a function to 'Ctrl + A' key combination
 * useKeyBinder({
 *   key: 'a',
 *   ctrl: true,
 *   func: () => console.log('Ctrl + A was pressed'),
 * });
 */
const useKeyBinder = ({ key, ctrl = false, func }: UseKeyBinderParams) => {
  /**
   * Normalizes the key to lower case for comparison and checks if the Ctrl key condition is met.
   *
   * @param {KeyboardEvent} event - The keyboard event triggered by the user.
   */
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const normalizedKey = event.key.toLowerCase();
      const isCtrlKey = !ctrl || event.ctrlKey;

      if (normalizedKey === key.toLowerCase() && isCtrlKey) {
        event.preventDefault();
        func();
      }
    },
    [key, ctrl, func],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
};

export default useKeyBinder;
