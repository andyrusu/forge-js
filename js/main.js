/**
 * Created by Andy on 1/10/2016.
 */

var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var NavDropdown = ReactBootstrap.NavDropdown;
var MenuItem = ReactBootstrap.MenuItem;

//Sidebar
var Tabs = ReactBootstrap.Tabs;
var Tab = ReactBootstrap.Tab;

var data = {
    sidebar: {
        namespaces: [
            {id: "f1", title: "Folder 1", type: "folder", state: 0, files: [{id: "fi1", title: "File 1", type: "file"}]},
            {id: "f2", title: "Folder 2", type: "folder", state: 0, files: [{id: "fi2", title: "File 2", type: "file"}]},
            {id: "fl3", title: "File 3", type: "file"}
        ]
    }
};

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
    renderFolders: function (data) {
        var folders = data.map(this.renderFolder);
        return (
            <ul className="tree">
                {folders}
            </ul>
        );
    },
    render: function () {
        return this.renderFolders(this.state.folders)
    }
});

var MainHeader = React.createClass({
    render: function () {
        return (
            <Navbar inverse fixedTop fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Forge</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem>Generate</NavItem>
                    <NavItem>Simulate</NavItem>
                    <NavItem>Run</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavDropdown title="User">
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Project Settings</MenuItem>
                        <MenuItem>Forge Settings</MenuItem>
                        <MenuItem>Exit</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
});

var Sidebar = React.createClass({
    render: function () {
        return (
            <div className="col-sm-3 col-md-2 sidebar">
                <Tabs defaultActiveKey={1}>
                    <Tab eventKey={1} title="NS">
                        <Namespaces folders={this.props.data.namespaces}/>
                    </Tab>
                    <Tab eventKey={2} title="Comps">List of Comps</Tab>
                </Tabs>
            </div>
        );
    }
});

var MainPanel = React.createClass({
    render: function () {
        return (
            <div className="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                main content
            </div>
        );
    }
});

var GUI = React.createClass({
    render: function () {
        return (
            <div>
                <MainHeader />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar data={this.props.data.sidebar}/>
                        <MainPanel />
                    </div>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <GUI data={data}/>,
    document.getElementById('root')
);
