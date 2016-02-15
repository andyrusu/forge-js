var React = require('react');
var MainHeader = require('../../app/ui/MainHeader.js');
var Sidebar = require('../../app/ui/Sidebar.js');
var MainPanel = require('../../app/ui/MainPanel.js');

var Gui = React.createClass({
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

module.exports = Gui;
