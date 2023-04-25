let module_object = () => {
    let text = 'This is the text from the module_object';

    let mod_func = () => {
        console.log(text);
    }

    return Object.assign(
        {},
        { mod_func }
    );
}

export {module_object};