function concatArray<T>(...itens: T[]): T[]{ 
    return new Array().concat(...itens);
  }
  
  const numArray = concatArray<number[]>([1,3], [50]);
  const stgArray = concatArray<string[]>(["natt", "reis"], ['piu'])
  
  console.log(numArray)
  console.log(stgArray)