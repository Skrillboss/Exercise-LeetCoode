function expect(val) {

    return {
        toBe: function (toBeVal) {

            if (val === toBeVal) {

                return true;

            } else {

                throw new Error("Not Equal");
            }
        },

        notToBe: function (notToBeVal) {

            if (notToBeVal !== val) {

                return true;

            } else {

                throw Error("Equal");

            }
        }
    };
}

try {

    console.log(expect(5).toBe(5));

} catch (error) {

    console.error(error.message);
}

try {

    console.log(expect(5).toBe(null));

} catch (error) {

    console.error(error.message);
}

try {

    console.log(expect(5).notToBe(null));

} catch (error) {

    console.error(error.message);
}