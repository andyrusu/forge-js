var React      = require('react');
var Tabs       = require('react-bootstrap').Tabs;
var Tab        = require('react-bootstrap').Tab;
var Namespaces = require('../../app/ui/Namespaces');

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

module.exports = Sidebar;
