function delLast (str,del) {
    if (typeof str !== 'string') {
        console.log('请确认要删除的对象为字符串！');
        return false;
    }else{
        let index = str.lastIndexOf(del);
        return str.substring(0,index ) + str.substring(index+1,str.length);
    }
}

console.log(delLast('aqwe','a'));


