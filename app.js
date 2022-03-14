<script>
    const JSONToCSV = (objArray, keys) => {
        let csv = keys.join(',');
        objArray.forEach((row) => {
            let values = [];
            keys.forEach((key) => {
                values.push(row[key] || '');
            });
            csv += '\n' + values.join(',');
        });
        return csv;
    };

    const exampleJSON = 
        [
            {
                color: "red",
                value: "#f00"
            },
            {
                color: "green",
                value: "#0f0"
            },
            {
                color: "blue",
                value: "#00f"
            },
            {
                color: "cyan",
                value: "#0ff"
            },
            {
                color: "magenta",
                value: "#f0f"
            },
            {
                color: "yellow",
                value: "#ff0"
            },
            {
                color: "black",
                value: "#000"
            }
        ]
        
    console.log(JSONToCSV(exampleJSON,
        ['color','value']));
</script>
