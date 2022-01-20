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
}
