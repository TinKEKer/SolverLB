// [
//     {
//         n:'123',
//         re:'1233',
//         pe:'12312'
//     },
//     {
//         n:'123',
//         re:'1233',
//         pe:'12312'
//     }
// ]


export const ire = (arr)=>{
     for(let i = 0;i<arr.length;i++){
           let ire;
           const selector = arr[i]
         const helper = arr[i-1]
         let tmp = (parseFloat(selector.n)-(i!==0?parseFloat(helper.n):0))
           ire = parseFloat(selector.re)*tmp+(i!==0?helper.ire:0)
           arr[i].ire=ire
     }
}

export const ipe = (arr)=>{
    for(let i = 0;i<arr.length;i++){
        let ipe;
        const selector = arr[i]
        let tmp = (parseFloat(selector.n)-parseFloat(i!==0?arr[i-1].n:0))
        ipe=parseFloat(selector.pe)*tmp+(i!==0?arr[i-1].ipe:0)
        arr[i].ipe=ipe
    }
}

export const vre = (arr)=>{
    for(let i = 0;i<arr.length;i++){
        let vre;
        const selector = arr[i]
        let tmp = (parseFloat(selector.n)-parseFloat(i!==0?arr[i-1].n:0))
        vre=parseFloat(selector.ire)*tmp+(i!==0?arr[i-1].vre:0)
        arr[i].vre=vre
    }
}

export const vpe = (arr)=>{
    for(let i = 0;i<arr.length;i++){
        let vpe;
        const selector = arr[i]
        let tmp = (parseFloat(selector.n)-parseFloat(i!==0?arr[i-1].n:0))
        vpe=parseFloat(selector.ipe)*tmp+(i!==0?arr[i-1].vpe:0)
        arr[i].vpe=vpe
    }
}


export const dif = (arr)=>{
    for(let i = 0;i<arr.length;i++){
        let dif;
        const selector = arr[i]
        dif=selector.vre>=selector.vpe?parseFloat(selector.vre)-parseFloat(selector.vpe):0
        arr[i].dif=dif
    }
}


export const r = (arr)=>{
    for(let i = 0;i<arr.length;i++){
        let r;
        const selector = arr[i]
        let tmp = (parseFloat(selector.n)-parseFloat(i!==0?arr[i-1].n:0))
        r=parseFloat(selector.dif)*tmp+(i!==0?arr[i-1].r:0)
        arr[i].r=r
    }
}

export const dop = (arr)=>{
    for(let i = 0;i<arr.length;i++){
        let dop;
        const selector = arr[i]
        dop=selector.vre>=selector.vpe?0:1
        arr[i].dop=dop
    }
}

export const R = (arr)=>{
    for(let i = 0;i<arr.length;i++){
        let R;
        const selector = arr[i]
        if(i!==0) {
            R = selector.dop > arr[i - 1].dop ? arr[i - 1].r : 0
            arr[i].R = R
        }else{
            arr[i].R=0
        }

    }
}

export const A = (arr)=>{
    for(let i = 0;i<arr.length;i++){
        let A;
        const selector = arr[i]
        if(i!==0) {
            A = selector.dop > arr[i - 1].dop ? (parseFloat(arr[i].ipe)/parseFloat(arr[i].ire))/2 : 0
            arr[i].A = A
        }else{
            arr[i].A=0
        }

    }
}

export const MLZO = (arr)=>{
    for(let i = 0;i<arr.length;i++){
        let MLZO
        const selector = arr[i]
        if(i!==0) {
            MLZO = selector.R>arr[i-1].R?selector.n:0
            arr[i].MLZO = MLZO
        }else{
            arr[i].MLZO=0
        }

    }
}