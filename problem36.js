function safeJsonParse(str) {
    try {
        return JSON.parse(str);
    } catch (error) {
        return null;
    }
}

safeJsonParse('{"a":1}'); // {a: 1}
safeJsonParse('bad json'); // null