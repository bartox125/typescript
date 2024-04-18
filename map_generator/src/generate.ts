export function create(width:number,height:number,element:HTMLDivElement){
    console.log(element);
    for(let y=0;y<height;y++){
        for(let x=0;x<width;x++){
            const canv=document.createElement("canvas")
            canv.setAttribute("id", `i${y}_${x}`)
            canv.setAttribute("width", `25`)
            canv.setAttribute("height", `25`)
            console.log(canv);
            element.append(canv)
        }
    }
}