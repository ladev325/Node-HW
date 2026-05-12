const getValues = function () {
    const n1 = parseFloat(document.getElementById('input1').value);
    const n2 = parseFloat(document.getElementById('input2').value);
    return { n1, n2 };
};

const request = async function (operation) {
    const { n1, n2 } = getValues();
    try {
        const req = await fetch('/api/calculus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ n1, n2, operation })
        });

        if (!req.ok) {
            throw new Error(`Error: ${req.status}`);
        }

        const data = await req.json();
        document.getElementById("answer").innerText = data.answer;

    } catch (error) {
        document.getElementById("answer").innerText = "X";
        console.log(error);
    }

}