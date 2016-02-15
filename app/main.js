var React = require('react');
var ReactDOM = require('react-dom');
var Gui = require('../app/ui/Gui.js');
var lg = require('../app');
var data = {
    sidebar: {
        namespaces: [
            {id: "f1", title: "Folder 1", type: "folder", state: 0, files: [{id: "fi1", title: "File 1", type: "file"}]},
            {id: "f2", title: "Folder 2", type: "folder", state: 0, files: [{id: "fi2", title: "File 2", type: "file"}]},
            {id: "fl3", title: "File 3", type: "file"}
        ]
    }
};

ReactDOM.render(
    <Gui data={data}/>,
    document.getElementById('root')
);
