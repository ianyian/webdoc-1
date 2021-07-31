module.exports = {
    title: 'zeo platform',
    descriptin: 'This is full stack of zeo documentation.',
    themeConfig:{
        nav:[
            {text: 'Home',link: '/'},
            {text: 'Guide',link: '/guide/'},
            {text: 'About zeo',link: 'http://www.zebralinetech.com'},
        ],
        sidebar: {
            '/guide/':[
                '',
                'frontend',
                'backend'
            ]
        }
    }
}
