/*
Here's an exponential function calculator e^x based on the Maclaurin Series for e^x
 */

export const exp = (x: number,
    tau: number,
    nmax: number)=>{
    
    let sum = 0
    let term = 1

    for (let k = 0; k < nmax;k++){
        sum = sum + term
        if (Math.abs(term) < (Math.abs(sum) * tau))
        {
            break
        }
        term = term * x / (k + 1)
    }

    return sum

}