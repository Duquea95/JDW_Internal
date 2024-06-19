export async function readCSV(event) {
    return new Promise((resolve, reject) => {
        const file = event.target.files[0];
        
        if (!file) {
            console.log("No file selected");
            reject("No file selected"); // Properly handle the case where no file is selected
            return;
        }

        const reader = new FileReader();

        reader.onload = async function(e) {
            const text = e.target.result;
            try {
                const csvData = await csvToArray(text);
                console.log(csvData)
                resolve( csvData ); // Resolve the data here
            } catch (error) {
                reject(error); // Proper error handling
            }
        };

        reader.onerror = function(e) {
            console.error("Error reading file:", e);
            reject(e); // Handle file reading errors
        };

        reader.readAsText(file);
})}

async function csvToArray(str, delimiter = ",") {
    const headers = str.slice(0, str.indexOf("\n")).split(delimiter).map(header => header.trim());
    const rows = str.slice(str.indexOf("\n") + 1).split("\n");

    const arr = rows.map(function (row) {
        // Use a regular expression to split on delimiter outside quotes
        const values = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(value => value.trim());
        const el = headers.reduce(function (object, header, index) {
            // Remove surrounding quotes if present
            object[header] = values[index] ? values[index].replace(/^"|"$/g, '') : values[index];
            return object;
        }, {});
        return el;
    });
    return arr;
}