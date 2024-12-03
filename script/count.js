let count=document.querySelectorAll('.count')
let minus=document.querySelectorAll('.minus')
let plus=document.querySelectorAll('.plus')

plus.forEach((n,index)=>{
    let k=0
    n.onclick=()=>{
        if(count[index].value=='0'){
            k+=1
            count[index].value=''
            count[index].value=k
        }
        else{
            k+=1
            count[index].value=k
        }

    }
})

minus.forEach((n,index)=>{
    n.onclick=()=>{
        let k=parseInt(count[index].value)
        if(count[index].value!='0'){
            k-=1
            count[index].value=k
        }

    }
})
