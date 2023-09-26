/*
设计和构建一个“最近最少使用”缓存，该缓存会删除最近最少使用的项目。
缓存应该从键映射到值(允许你插入和检索特定键对应的值)，并在初始化时指定最大容量。
当缓存被填满时，它应该删除最近最少使用的项目。
它应该支持以下操作： 获取数据 get 和 写入数据 put 。
获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。
当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。
*/

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.capacity = capacity; // 缓存容量
    this.cache = new Map(); // 使用Map来存储数据
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cache.has(key)) {
        // 如果缓存中存在该数据，将其移到最近使用的位置
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    } else {
        return -1; // 如果缓存中不存在该数据，返回-1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cache.has(key)) {
        // 如果缓存中已经存在该数据，先删除旧数据
        this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
        // 如果缓存已满，删除最久未使用的数据（即最前面的数据）
        const oldestKey = this.cache.keys().next().value;
        this.cache.delete(oldestKey);
    }
    // 将新数据添加到缓存中
    this.cache.set(key, value);
};

const test = () => {
    let cache = new LRUCache(2);

    cache.put(1, 1);
    cache.put(2, 2);
    console.log(cache.get(1));       // 返回  1
    cache.put(3, 3);    // 该操作会使得密钥 2 作废
    console.log(cache.get(2));       // 返回 -1 (未找到)
    cache.put(4, 4);    // 该操作会使得密钥 1 作废
    console.log(cache.get(1));       // 返回 -1 (未找到)
    console.log(cache.get(3));       // 返回  3
    console.log(cache.get(4));       // 返回  4
}

test()