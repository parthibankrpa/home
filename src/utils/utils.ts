function sort(obj:string[],keyfn:(a:string,b:string)=>number):string[]{
    return obj.sort(keyfn);
}

export {sort}