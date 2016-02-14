var React = require('react');

var Namespaces = React.createClass({
    getInitialState: function () {
        return {folders: this.props.folders};
    },
    handleFolderClick: function (e) {
        e.preventDefault();
        var id = e.currentTarget.getAttribute('id');
        this.setState({folders: this.state.folders.map(function (folder) {
            if (folder.type=="folder")
            {
                if (folder.id==id)
                    folder.state = (folder.state==0) ? 1 : 0;
            }
            return folder;
        })});
    },
    handleFileClick: function (e) {
        e.preventDefault();
        console.log(e);
    },
    renderFolder: function (folder) {
        var icon, list = null;
        if (folder.type=="folder")
        {
            if (folder.state==0)
                icon = <i className="glyphicon glyphicon-folder-close"></i>
            else
            {
                icon = <i className="glyphicon glyphicon-folder-open"></i>

                if (folder.files!=undefined&&folder.files.length>0)
                    list = this.renderFolders(folder.files);
            }
        }
        else
            icon = <i className="glyphicon glyphicon-file"></i>

        return (
            <li className="folder">
                {icon}
                <a id={folder.id} href="#" onClick={(folder.type=="folder") ? this.handleFolderClick : this.handleFileClick}>{folder.title}</a>
                {list}
            </li>
        );
    },
    renderFolders: function (folders) {
        return (
            <ul className="tree">
                {folders.map(this.renderFolder)}
            </ul>
        );
    },
    render: function () {
        return this.renderFolders(this.state.folders)
    }
});

module.exports = Namespaces;
