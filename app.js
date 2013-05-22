Ext.application({
    name: 'SenchaFiddle',
    
    launch: function() {
        
	   
        var carousel = Ext.create('Ext.Carousel', {
            fullscreen: true,
            layout: 
			{
				type: 'vbox',
				pack:'center',
				align: 'center'
			},
            defaults: {
                styleHtmlContent: true
            },
            
            items: [
                {
                    html : 'Carousel 1',
                    items: 
					[{
                        xtype: 'button',
                        text: 'Go to Carousel 2',
                        handler: function() 
						{
                            carousel.next();
                        },
                    },
					{
						xtype: 'button',
						text: 'Go to Carousel 3',
						handler: function()
						{
							carousel.next();
							carousel.next();
						},
						
					},
					{
						xtype: 'toolbar',
						docked: 'top',
						title: 'testBar',
					}]
                },
                {
                    html : 'Carousel 2',
                    items: [{
                        xtype: 'button',
                        text: 'Go back Carousel 1',
                        handler: function() 
						{
                            carousel.previous();
                        }
					},
					{
						xtype: 'button',
						text: 'Go foreward to Carousel 3',
						handler: function()
						{
							carousel.next();
							carousel.next();
						}
					}]
                },
				{
                    html : 'Carousel 3',
                    items: {
                        xtype: 'button',
                        text: 'Go back Carousel 1',
                        handler: function() 
						{
                            carousel.previous();
							carousel.previous();
                        }
                    }
                }

            ]
        });
		var datePicker = Ext.create('Ext.picker.Date', {
			useTitles:true,
			value: new Date(),
			height: 300,
			control:
			{
				'button[text=Cancel]':{tap:'alertUser'}
			},
			alertUser: function ()
			{
				if(this.getYearText() == 'Year')
				{
					Ext.Msg.alert('are you Mitchell?');
				}
				else
				{
					Ext.Msg.alert('Hello stranger!');
				}
				this.hide();
			}
		});
		
		Ext.Msg.alert('Hello stranger!');
		Ext.Viewport.add(carousel);

		Ext.Viewport.add(datePicker);
		//datePicker.show();


    }
});