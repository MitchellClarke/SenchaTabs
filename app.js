/*global Ext:false */
Ext.onReady(function () {
    var resultsPanel = Ext.create('Ext.TabPanel', {
    fullscreen: true,
    tabBarPosition: 'bottom',
    renderTo: Ext.getBody(),
    defaults: {
        styleHtmlContent: true
    },

    items: [
        {
            title: 'Home',
            iconCls: 'home',
            html: 'Home Screen'
        },
        {
            title: 'Contact',
            iconCls: 'user',
            html: 'Contact Screen'
        }
    ]
});
});
