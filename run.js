function write(string){
    process.stdout.write(string);
}
import chalk from 'chalk';
import boxen from 'boxen';

// write(chalk.blue.bgGreen('Hello chalk'));


// for(let i=0; i<16; i++){
//     for(let j=0; j<16; j++){
//         let color = (i*j).toString()
//         write(chalk.ansi256(color)(color.padEnd(4,' '))); 
//     }
//     write('\n');
// }

write(boxen(chalk.red.bgBlue('Hello chalk'), {
    padding: 1,
    margin:1,
    borderStyle: 'double',
}));


write(boxen(chalk.magenta.bgGreen('Miks?'), {
    padding: 0,
    margin:5,
    borderStyle: 'classic',
}));


write(boxen(chalk.cyan.bgRed('Bruh'), {
    padding: 4,
    margin:4,
    borderStyle: 'arrow',
}));

write(boxen(chalk.red.bgYellowBright('Kus?'), {
    padding: 2,
    margin:1.5,
    borderStyle: 'singleDouble'
}));


write(boxen(chalk.magenta.bgGreen('ok...'), {
    padding: 1,
    margin:6,
    borderStyle: 'round'
}));


write(boxen(chalk.cyan.bgRed('Kuidas?'), {
    padding: 9,
    margin:1,
}));
