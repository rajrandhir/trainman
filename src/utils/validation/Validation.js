

const validation = (value) => {
    let errors = {};
    if (value) {
        errors = 'Email is required!!'
    }
    else if (value.length != 10)
        errors.value = 'Max and Min digit must be 10!!'

    return errors
}
export default validation;