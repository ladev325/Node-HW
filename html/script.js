const getValues = function () {
    const val1 = parseFloat(document.getElementById('input1').value);
    const val2 = parseFloat(document.getElementById('input2').value);
    return { val1, val2 };
};

const plus = function () {
    let { val1, val2 } = getValues();
    document.getElementById("answer").innerText = val1 + val2;
};

const minus = function () {
    let { val1, val2 } = getValues();
    document.getElementById("answer").innerText = val1 - val2;
};

const mult = function () {
    let { val1, val2 } = getValues();
    document.getElementById("answer").innerText = val1 * val2;
};

const div = function () {
    let { val1, val2 } = getValues();
    if (val2 === 0)
        document.getElementById("answer").innerText = "Nope";
    else
        document.getElementById("answer").innerText = val1 / val2;
};

const mod = function () {
    let { val1, val2 } = getValues();
    if (val2 === 0)
        document.getElementById("answer").innerText = "Nope";
    else
        document.getElementById("answer").innerText = val1 % val2;
};