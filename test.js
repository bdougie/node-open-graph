import * as og from "./index.js";
og("http://github.com/samholmes/node-open-graph/raw/master/test.html", function (err, meta) {
    if (err)
        return console.log(err);
    console.log(meta);
});
