import { Dispatch, SetStateAction, useState } from "react";

export type Ptr<T> = { val: T; set: Dispatch<SetStateAction<T>> };
export const Ptr = {
    Default<T>(x: T): Ptr<T> {
        return { val: x, set: () => {} };
    },

    Lens<T, K extends keyof T>(ptr: Ptr<T>, key: K): Ptr<T[K]> {
        return {
            val: ptr.val[key],
            set: (val) => {
                if (val instanceof Function) {
                    ptr.set((a: T) => ({ ...a, [key]: val(a[key]) }));
                } else {
                    ptr.set((a: T) => ({ ...a, [key]: val }));
                }
            },
        };
    },
};
export function useStatePtr<T>(defaultValue: T): Ptr<T> {
    const [get, set] = useState<T>(defaultValue);
    return { val: get, set };
}
