import { my_module, module_object } from "./barrel_module.js";

console.log('support:');
my_module();
console.log('other_support:');
let mod = module_object();
mod.mod_func();