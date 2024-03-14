export function joinCls(...cls: (null | undefined | string)[]) {
    return cls.filter((x) => x).join(" ");
}
