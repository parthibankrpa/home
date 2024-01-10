function sort(obj:string[],keyfn:(a:string,b:string)=>number){
    return obj.sort(keyfn);
}

export {sort}