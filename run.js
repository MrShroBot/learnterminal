function write(string){
    process.stdout.write(string);
}
// //bold                           //reset
// write("\x1B[1m"); write("Bruh"); write("\x1B[0m"); write("\n");
// //dim/faint                      //reset
// write("\x1B[2m"); write("Bruh"); write("\x1B[0m"); write("\n");
// //italic                         //reset
// write("\x1B[3m"); write("Bruh"); write("\x1B[0m"); write("\n");
// //underline                      //reset
// write("\x1B[4m"); write("Bruh"); write("\x1B[0m"); write("\n");
// //blincing                       //reset
// write("\x1B[5m"); write("Bruh"); write("\x1B[0m"); write("\n");

// //inverse                        //reset
// write("\x1B[7m"); write("Bruh"); write("\x1B[0m"); write("\n");
// //hidden/invisab                 //reset
// write("\x1B[8m"); write("Bruh"); write("\x1B[0m"); write("\n");
// //stricethrough                  //reset
// write("\x1B[9m"); write("Bruh"); write("\x1B[0m"); write("\n");

// lines 22-39 no worke

// for(let i=30; i<40; i++){
//     if(i==38) continue;
//         // color                                          //reset
//         write("\x1B[1;"+i+"m"); write("color code number"+i); write("\x1B[0m"); write("\n");
// }
// for(let i=30; i<40; i++){
//     if(i==38) continue;
//         // color                                          //reset
//         write("\x1B[1;"+i+"m"); write("color code number"+i); write("\x1B[0m"); write("\n");
// }
// for(let i=0; i<16; i++){
//     for(let j=0; j<16; j++){
//             let color = i*j
//             // color                                          //reset
//             write("\x1B[2;"+i+"m"); write("color code number"+i); write("\x1B[0m"); write("\n");
//     }
// }

// for(let i=40; i<50; i++){
//     if(i==48) continue;
//         // color                                          //reset
//         write("\x1B[1;"+i+"m"); write("color code number"+i); write("\x1B[0m"); write("\n");
// }

console.clear();
let date = new Date().toString();
write(date);
setInterval(()=>{
    write("\x1B["+ date.length + "D");
    date = new Date().toString();
    write(date)
}, 1);