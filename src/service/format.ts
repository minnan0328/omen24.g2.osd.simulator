
export const removeAndLowercase = (str: string, replaceText: string): string => {
    // 移除指定的子字符串
    const removedString = str.replace(replaceText, '').trim();
    // 轉小寫
    return removedString.toLowerCase();
};