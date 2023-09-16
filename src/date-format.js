/*
Date对象打印成字符串的格式往往不符合要求，所以需要格式化
*/
function formatDate(date, format) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    format = format.replace('yyyy', year);
    format = format.replace('MM', month);
    format = format.replace('dd', day);
    format = format.replace('HH', hours);
    format = format.replace('mm', minutes);
    format = format.replace('ss', seconds);

    return format;
}

const test = () => {
    const today = new Date();
    const formattedDate = formatDate(today, 'yyyy-MM-dd HH:mm:ss');
    console.log(formattedDate); // 输出类似于 "2023-09-16 14:30:00"
}

test()
