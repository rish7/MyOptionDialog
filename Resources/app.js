// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.UI.setBackgroundColor('#000');


//
// create base UI tab and root window
//
var win = Ti.UI.createWindow({  
    title:'My Option Dialog',
    backgroundColor:'#fff',
    layout:'vertical'
});

var opts = {};

/*
 * Normal Option Dialog Starts
 */

var btnNormal = Ti.UI.createButton({
	title:'Open Option Dialog',
	top:10
});

btnNormal.addEventListener('click', function(e){
	opts.title = 'Where are you from?';
	opts.buttonNames = ['Ok'];
	opts.options = ['India','UK','USA'];
	var dialog = Ti.UI.createOptionDialog(opts);
	dialog.addEventListener('click',function(e){
			if(e.button)
			{
				if(e.index<0)
				alert('You pressed back button!, I am right?');
				else
				alert('Button Clicked and Index is '+ e.index);
			}			
			else
			{
				alert('Option/ Item  Clicked and Index is '+ e.index)
			}	
	});
	dialog.show();
});

win.add(btnNormal);

/*
 * Normal Option Dialog Ends
 */


/*
 * Android view  Option Dialog Starts
 */


var btnAndroidView = Ti.UI.createButton({
	title:'Open Android View Option Dialog',
	top:10
});

btnAndroidView.addEventListener('click', function(e){
	
	
	var loginView =Ti.UI.createView({
		layout:'vertical',
		backgroundColor:'#467cb3'
	});
	
	var txtUserName = Ti.UI.createTextField({
		hintText:'User Name',
		top:2,
		width:Ti.UI.FILL
	});
	loginView.add(txtUserName);
	
	var txtPassword = Ti.UI.createTextField({
		hintText:'Password',
		passwordMask:true,
		top:2,
		width:Ti.UI.FILL
	});
	loginView.add(txtPassword);
	
	opts.title = 'Login';
	opts.buttonNames = ['Login','Cancel'];
	opts.options = ['India','UK','USA']; // This will never care about this options
	opts.androidView = loginView;
	
	var dialog = Ti.UI.createOptionDialog(opts);
	dialog.addEventListener('click',function(e){
			if(e.button)
			{
				if(e.index<0)
				alert('You pressed back button!, I am right?');
				else if(e.index==0)
				{
				alert('Login Button Clicked!');
				//Your Login checking logic here
				}
				else
				{
					alert('Cancel Button Clicked!');
				}
			}			
			
	});
	dialog.show();
});

win.add(btnAndroidView);


win.open();
