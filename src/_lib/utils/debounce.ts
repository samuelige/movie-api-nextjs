type DebouncedFunction<Args extends any[]> = (...args: Args) => void;

export const debounce = <Args extends any[]>(
    func: DebouncedFunction<Args>,
    delay: number = 500
    ): DebouncedFunction<Args> => {
  let timer: NodeJS.Timeout | null;

  return function (...args: Args) {
    // @ts-ignore
    const context = this;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, delay);
  };
};