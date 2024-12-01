const open = require("./node_modules/open");

const { method, parameters } = JSON.parse(process.argv[2]);

if (method === "query") {
    console.log(JSON.stringify(
        {
            "result": [{
                "Title": "SpanishDict.com",
                "Subtitle": "Click to open " + parameters + " in SpanishDict.com",
                "JsonRPCAction": {
                    "method": "open_on_spanishdict",
                    "parameters": ["https://www.spanishdict.com/conjugate/", parameters[0]]
                },
                "IcoPath": "images\\sd.png"
            }]
        }
    ));
}

if (method === "open_on_spanishdict") {
    const url = `${parameters[0]}/${parameters[1]}`;
    open(url);
}


