var React                   = require('react');
var ReactDOM                = require('react-dom');
var ColorComponent 		 	= require("./components/ColorComponent.jsx");

// Let's create a "real-time search" component

var JeffMarket = React.createClass({

    getInitialState: function(){
        return { searchColor: '', searchPattern: ''};
    },
    filterColor: function(color){
        this.setState({searchColor:color}); 
    },
    filterBlue: function() {
        this.filterColor('blue'); 
    },
    filterGreen: function() { 
        this.filterColor('green'); 
    },
    filterYellow: function() { 
        this.filterColor('yellow'); 
    }, 
    filterOrange: function() { 
        this.filterColor('orange'); 
    }, 
    filterRed: function(){ 
        this.filterColor('red'); 
    }, 
    filterPurple: function(){ 
        this.filterColor('purple'); 
    },
    allColors: function(){
        this.filterColor('');
    },

    render: function() {

        var photos = this.props.items,
            searchColor = this.state.searchColor.trim().toLowerCase();
            searchPattern = this.state.searchPattern.trim().toLowerCase(); 

        if(searchColor.length > 0){
            // We are searching. Filter the results.
            photos = photos.filter(function(l){
                return l.color.toLowerCase().match( searchColor );
            });
        }
        if(searchPattern.length > 0) {
        	photos = photos.filter(function(l){
                return l.pattern.toLowerCase().match( searchPattern );
            });
        }

        return  <div className="container">
        			<Header />
                    <div className="container-fluid"> 
                        <div className="colors"> 
                            <div className="button" onClick={this.filterBlue}> 
                                <a> Blue </a> 
                            </div> 
                            <div className="button" onClick={this.filterGreen}>
                                <a> Green </a> 
                            </div> 
                            <div className="button" onClick={this.filterYellow}> 
                                <a> Yellow </a> 
                            </div> 
                            <div className="button"onClick={this.filterOrange}> 
                                <a> Orange </a> 
                            </div> 
                            <div className="button"onClick={this.filterRed}> 
                                <a> Red </a> 
                            </div> 
                            <div className="button" onClick={this.filterPurple}> 
                                <a> Purple </a>
                            </div> 
                            <div className="button" onClick={this.allColors}> 
                                <a> All Colors </a>
                            </div> 
                        </div>
                    </div> 
                    <ul> 
                        { photos.map(function(l){
                           // return <li> {l.color} {l.pattern} <a href={l.url}>{l.url}</a></li>
                           return <img className="jeff" src={l.url} height="400"></img>
                        }) }
                    </ul>
                </div>;
    }
});

//<input type="text" value={this.state.searchColor} onChange={this.handlePattern} placeholder="Type color here" />          
//<input type="text" value={this.state.searchPattern} onChange={this.handlePattern} placeholder="Type pattern here"/>


var Header = React.createClass ({ 
	render: function() { 
		return <div> 
                    <h2> Jeff Market </h2> 
                    <h3> Your one-stop gallery for artisanally edited photos of Jeff Huang </h3> 
                </div>
	}
});

var photos = [
    { 	name: 'JeffOrangeLight', 
    	color: 'orange', 
    	pattern: 'light', 
    	url: 'jeffs/JeffOrangeLight.png'},
    {   name: 'JeffPurpleDark', 
        color: 'purple', 
        pattern: 'dark', 
        url: 'jeffs/JeffPurpleDark.png'},
    {   name: 'JeffBluePolka', 
        color: 'blue', 
        pattern: 'polka', 
        url: 'jeffs/JeffBluePolka.png'},
    {   name: 'JeffRedLight', 
        color: 'red', 
        pattern: 'light', 
        url: 'jeffs/JeffRedLight.png'},
    {   name: 'JeffGreenPolka', 
        color: 'green', 
        pattern: 'polka', 
        url: 'jeffs/JeffGreenPolka.png'},
    {   name: 'JeffYellowLight', 
        color: 'yellow', 
        pattern: 'light', 
        url: 'jeffs/JeffYellowLight.png'},
    {   name: 'JeffOrangeMedium', 
        color: 'orange', 
        pattern: 'medium', 
        url: 'jeffs/JeffOrangeMedium.png'},
    {   name: 'JeffRedMedium', 
        color: 'red', 
        pattern: 'medium', 
        url: 'jeffs/JeffRedMedium.png'},
    {   name: 'JeffBlueLight', 
        color: 'blue', 
        pattern: 'light', 
        url: 'jeffs/JeffBlueLight.png'},
    {   name: 'JeffGreenDark', 
        color: 'green', 
        pattern: 'dark', 
        url: 'jeffs/JeffGreenDark.png'},
    {   name: 'JeffYellowPolka', 
        color: 'yellow', 
        pattern: 'polka', 
        url: 'jeffs/JeffYellowPolka.png'},
    {   name: 'JeffRedDark', 
        color: 'red', 
        pattern: 'dark', 
        url: 'jeffs/JeffRedDark.png'},
    {   name: 'JeffBlueMedium', 
        color: 'blue', 
        pattern: 'medium', 
        url: 'jeffs/JeffBlueMedium.png'},
    {   name: 'JeffOrangeStriped', 
        color: 'orange', 
        pattern: 'striped', 
        url: 'jeffs/JeffOrangeStriped.png'},
    {   name: 'JeffYellowPurpleLight', 
        color: 'purple', 
        pattern: 'light', 
        url: 'jeffs/JeffPurpleLight.png'},
    {   name: 'JeffPurplePolka', 
        color: 'purple', 
        pattern: 'polka', 
        url: 'jeffs/JeffPurplePolka.png'},
    {   name: 'JeffYellowMedium', 
        color: 'yellow', 
        pattern: 'medium', 
        url: 'jeffs/JeffYellowMedium.png'},
];

// Render the SearchExample component on the page

ReactDOM.render(
    <JeffMarket items={ photos } />,
    document.getElementById('container')
);