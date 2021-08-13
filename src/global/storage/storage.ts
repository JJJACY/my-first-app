// 设置永久缓存
export function setKey(key: string, val: any) {
	window.localStorage.setItem(key, JSON.stringify(val));
}
// 获取永久缓存
export function getKey(key: string) {
	const json: any = window.localStorage.getItem(key);
	return JSON.parse(json);
}
// 移除永久缓存
export function deleteKey(key: string) {
	window.localStorage.removeItem(key);
}
// 移除全部永久缓存
export function clearKey() {
	window.localStorage.clear();
}