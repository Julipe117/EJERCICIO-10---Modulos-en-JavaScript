import {multiplica, suma} from "./controller.js";
import chalk from 'chalk';

const mul = multiplica(1, 2);
console.log(mul);

const sum = suma(4, 5);
console.log(chalk.green(sum));

