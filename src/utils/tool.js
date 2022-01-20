export class Tool {
    /**
     * 空校验 null或""都返回true
     */
    static isEmpty(obj) {
        if ((typeof obj === 'string')) {
            return !obj || obj.replace(/\s+/g, "") === "";
        } else {
            return (!obj || JSON.stringify(obj) === "{}" || obj.length === 0);
        }
    }

    /**
     * 非空校验
     */
    static isNotEmpty(obj) {
        return !this.isEmpty(obj);
    }

    /**
     * 对象复制
     * @param obj
     */
    static copy(obj) {
        if (Tool.isNotEmpty(obj)) {
            return JSON.parse(JSON.stringify(obj));
        }
    }

    /**
     * 使用递归将数组转化为树形结构
     * 父id属性为parent
     */
    static array2Tree(array, parentId) {
        if (Tool.isEmpty(array)) {
            return [];
        }
        const res = [];
        for (let i = 0; i < array.length; i++) {
            const c = array[i];
            if (Number(c.parent) === Number(parentId)) {
                res.push(c);

                const children = Tool.array2Tree(array, c.id);
                if (Tool.isNotEmpty(children)) {
                    c.children = children;
                }
            }
        }
        return res;
    }
}
